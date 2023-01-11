package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimVirtualChassisPartialUpdateRequest {
    public DcimVirtualChassisPartialUpdatePathParams pathParams;
    public DcimVirtualChassisPartialUpdateRequest withPathParams(DcimVirtualChassisPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVirtualChassisInput request;
    public DcimVirtualChassisPartialUpdateRequest withRequest(openapisdk.models.shared.WritableVirtualChassisInput request) {
        this.request = request;
        return this;
    }
}