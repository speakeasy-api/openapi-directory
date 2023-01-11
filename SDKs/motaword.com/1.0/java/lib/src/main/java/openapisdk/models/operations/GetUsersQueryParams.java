package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetUsersQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetUsersQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetUsersQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_type")
    public GetUsersUserTypeEnum userType;
    public GetUsersQueryParams withUserType(GetUsersUserTypeEnum userType) {
        this.userType = userType;
        return this;
    }
}