package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDlQueryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=query")
    public String query;
    public GetDlQueryPathParams withQuery(String query) {
        this.query = query;
        return this;
    }
}