package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCameraVideoLinkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timestamp")
    public OffsetDateTime timestamp;
    public GetDeviceCameraVideoLinkQueryParams withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}