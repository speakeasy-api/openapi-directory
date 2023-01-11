package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVendorProjectsByUserIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed")
    public Boolean completed;
    public GetVendorProjectsByUserIdQueryParams withCompleted(Boolean completed) {
        this.completed = completed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=joined")
    public Boolean joined;
    public GetVendorProjectsByUserIdQueryParams withJoined(Boolean joined) {
        this.joined = joined;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetVendorProjectsByUserIdQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetVendorProjectsByUserIdQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}