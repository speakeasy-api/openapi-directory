package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllApplicationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=application_type")
    public String applicationType;
    public GetAllApplicationsQueryParams withApplicationType(String applicationType) {
        this.applicationType = applicationType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carrier_id")
    public String carrierId;
    public GetAllApplicationsQueryParams withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group_id")
    public String groupId;
    public GetAllApplicationsQueryParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetAllApplicationsQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public GetAllApplicationsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public String status;
    public GetAllApplicationsQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
}