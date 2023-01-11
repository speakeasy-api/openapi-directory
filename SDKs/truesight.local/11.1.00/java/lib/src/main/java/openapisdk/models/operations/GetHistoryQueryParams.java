package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=applicationId")
    public String applicationId;
    public GetHistoryQueryParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public Long from;
    public GetHistoryQueryParams withFrom(Long from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupId")
    public String groupId;
    public GetHistoryQueryParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=serviceId")
    public String serviceId;
    public GetHistoryQueryParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public Long to;
    public GetHistoryQueryParams withTo(Long to) {
        this.to = to;
        return this;
    }
}