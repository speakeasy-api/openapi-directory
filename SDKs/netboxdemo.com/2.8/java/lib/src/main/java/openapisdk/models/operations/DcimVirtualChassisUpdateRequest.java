package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimVirtualChassisUpdateRequest {
    public DcimVirtualChassisUpdatePathParams pathParams;
    public DcimVirtualChassisUpdateRequest withPathParams(DcimVirtualChassisUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableVirtualChassisInput request;
    public DcimVirtualChassisUpdateRequest withRequest(openapisdk.models.shared.WritableVirtualChassisInput request) {
        this.request = request;
        return this;
    }
}