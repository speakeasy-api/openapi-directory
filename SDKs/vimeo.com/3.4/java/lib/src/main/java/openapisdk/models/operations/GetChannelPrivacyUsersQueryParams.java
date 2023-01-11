package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelPrivacyUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetChannelPrivacyUsersDirectionEnum direction;
    public GetChannelPrivacyUsersQueryParams withDirection(GetChannelPrivacyUsersDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetChannelPrivacyUsersQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetChannelPrivacyUsersQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}