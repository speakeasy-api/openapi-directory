package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountSitesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetAccountSitesQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}