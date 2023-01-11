package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceConnectionsPartialUpdateRequest {
    public DcimInterfaceConnectionsPartialUpdatePathParams pathParams;
    public DcimInterfaceConnectionsPartialUpdateRequest withPathParams(DcimInterfaceConnectionsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInterfaceConnectionInput request;
    public DcimInterfaceConnectionsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableInterfaceConnectionInput request) {
        this.request = request;
        return this;
    }
}