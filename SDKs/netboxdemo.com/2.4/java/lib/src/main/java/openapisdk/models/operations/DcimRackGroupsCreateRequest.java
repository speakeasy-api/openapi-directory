package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimRackGroupsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableRackGroupInput request;
    public DcimRackGroupsCreateRequest withRequest(openapisdk.models.shared.WritableRackGroupInput request) {
        this.request = request;
        return this;
    }
}