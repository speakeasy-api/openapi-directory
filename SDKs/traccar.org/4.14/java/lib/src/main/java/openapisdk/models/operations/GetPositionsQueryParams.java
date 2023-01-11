package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPositionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public Long deviceId;
    public GetPositionsQueryParams withDeviceId(Long deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public OffsetDateTime from;
    public GetPositionsQueryParams withFrom(OffsetDateTime from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public Long id;
    public GetPositionsQueryParams withId(Long id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public OffsetDateTime to;
    public GetPositionsQueryParams withTo(OffsetDateTime to) {
        this.to = to;
        return this;
    }
}