package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoPrivacyUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVideoPrivacyUsersQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVideoPrivacyUsersQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}