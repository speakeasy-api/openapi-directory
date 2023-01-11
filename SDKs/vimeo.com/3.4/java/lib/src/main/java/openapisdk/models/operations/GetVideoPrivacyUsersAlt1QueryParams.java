package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVideoPrivacyUsersAlt1QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetVideoPrivacyUsersAlt1QueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetVideoPrivacyUsersAlt1QueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}