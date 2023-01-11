package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfacesUpdateRequest {
    public DcimInterfacesUpdatePathParams pathParams;
    public DcimInterfacesUpdateRequest withPathParams(DcimInterfacesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInterfaceInput request;
    public DcimInterfacesUpdateRequest withRequest(openapisdk.models.shared.WritableInterfaceInput request) {
        this.request = request;
        return this;
    }
}