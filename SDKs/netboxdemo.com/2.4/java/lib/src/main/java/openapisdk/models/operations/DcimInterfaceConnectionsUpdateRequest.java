package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceConnectionsUpdateRequest {
    public DcimInterfaceConnectionsUpdatePathParams pathParams;
    public DcimInterfaceConnectionsUpdateRequest withPathParams(DcimInterfaceConnectionsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInterfaceConnectionInput request;
    public DcimInterfaceConnectionsUpdateRequest withRequest(openapisdk.models.shared.WritableInterfaceConnectionInput request) {
        this.request = request;
        return this;
    }
}