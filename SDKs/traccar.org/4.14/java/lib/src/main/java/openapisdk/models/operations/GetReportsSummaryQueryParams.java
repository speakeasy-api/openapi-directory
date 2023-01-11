package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public Long[] deviceId;
    public GetReportsSummaryQueryParams withDeviceId(Long[] deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public OffsetDateTime from;
    public GetReportsSummaryQueryParams withFrom(OffsetDateTime from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupId")
    public Long[] groupId;
    public GetReportsSummaryQueryParams withGroupId(Long[] groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public OffsetDateTime to;
    public GetReportsSummaryQueryParams withTo(OffsetDateTime to) {
        this.to = to;
        return this;
    }
}