package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountCredentialsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetAccountCredentialsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}