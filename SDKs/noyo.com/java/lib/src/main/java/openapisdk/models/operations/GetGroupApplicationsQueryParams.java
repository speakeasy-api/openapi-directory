package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGroupApplicationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application_type")
    public String applicationType;
    public GetGroupApplicationsQueryParams withApplicationType(String applicationType) {
        this.applicationType = applicationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carrier_group_id")
    public String carrierGroupId;
    public GetGroupApplicationsQueryParams withCarrierGroupId(String carrierGroupId) {
        this.carrierGroupId = carrierGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carrier_id")
    public String carrierId;
    public GetGroupApplicationsQueryParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetGroupApplicationsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetGroupApplicationsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public GetGroupApplicationsQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_direction")
    public String sortDirection;
    public GetGroupApplicationsQueryParams withSortDirection(String sortDirection) {
        this.sortDirection = sortDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public GetGroupApplicationsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}