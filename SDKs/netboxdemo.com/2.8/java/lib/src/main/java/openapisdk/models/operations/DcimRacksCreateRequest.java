package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRacksCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRackInput request;
    public DcimRacksCreateRequest withRequest(openapisdk.models.shared.WritableRackInput request) {
        this.request = request;
        return this;
    }
}