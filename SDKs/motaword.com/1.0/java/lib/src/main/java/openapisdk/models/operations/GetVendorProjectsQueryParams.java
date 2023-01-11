package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVendorProjectsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed")
    public Boolean completed;
    public GetVendorProjectsQueryParams withCompleted(Boolean completed) {
        this.completed = completed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=joined")
    public Boolean joined;
    public GetVendorProjectsQueryParams withJoined(Boolean joined) {
        this.joined = joined;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetVendorProjectsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetVendorProjectsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}