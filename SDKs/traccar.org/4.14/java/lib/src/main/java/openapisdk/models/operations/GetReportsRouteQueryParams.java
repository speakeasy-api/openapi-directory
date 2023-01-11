package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public Long[] deviceId;
    public GetReportsRouteQueryParams withDeviceId(Long[] deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public OffsetDateTime from;
    public GetReportsRouteQueryParams withFrom(OffsetDateTime from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupId")
    public Long[] groupId;
    public GetReportsRouteQueryParams withGroupId(Long[] groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public OffsetDateTime to;
    public GetReportsRouteQueryParams withTo(OffsetDateTime to) {
        this.to = to;
        return this;
    }
}