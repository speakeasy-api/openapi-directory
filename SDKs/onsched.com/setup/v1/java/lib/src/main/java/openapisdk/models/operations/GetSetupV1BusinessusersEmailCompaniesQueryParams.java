package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1BusinessusersEmailCompaniesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetSetupV1BusinessusersEmailCompaniesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetSetupV1BusinessusersEmailCompaniesQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchText")
    public String searchText;
    public GetSetupV1BusinessusersEmailCompaniesQueryParams withSearchText(String searchText) {
        this.searchText = searchText;
        return this;
    }
}