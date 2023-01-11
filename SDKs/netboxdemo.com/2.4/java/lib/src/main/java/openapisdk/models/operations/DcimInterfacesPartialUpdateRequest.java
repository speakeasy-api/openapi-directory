package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfacesPartialUpdateRequest {
    public DcimInterfacesPartialUpdatePathParams pathParams;
    public DcimInterfacesPartialUpdateRequest withPathParams(DcimInterfacesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInterfaceInput request;
    public DcimInterfacesPartialUpdateRequest withRequest(openapisdk.models.shared.WritableInterfaceInput request) {
        this.request = request;
        return this;
    }
}