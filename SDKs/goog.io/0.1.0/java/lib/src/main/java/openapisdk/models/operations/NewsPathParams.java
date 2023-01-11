package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=query")
    public String query;
    public NewsPathParams withQuery(String query) {
        this.query = query;
        return this;
    }
}