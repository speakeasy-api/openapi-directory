package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=query")
    public String query;
    public SearchPathParams withQuery(String query) {
        this.query = query;
        return this;
    }
}