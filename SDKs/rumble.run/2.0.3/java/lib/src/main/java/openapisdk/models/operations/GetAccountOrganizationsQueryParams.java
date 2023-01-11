package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountOrganizationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetAccountOrganizationsQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
}