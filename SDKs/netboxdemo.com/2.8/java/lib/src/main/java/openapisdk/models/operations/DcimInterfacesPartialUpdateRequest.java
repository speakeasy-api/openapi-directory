package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfacesPartialUpdateRequest {
    public DcimInterfacesPartialUpdatePathParams pathParams;
    public DcimInterfacesPartialUpdateRequest withPathParams(DcimInterfacesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableDeviceInterfaceInput request;
    public DcimInterfacesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableDeviceInterfaceInput request) {
        this.request = request;
        return this;
    }
}