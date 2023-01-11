package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceConnectionsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInterfaceConnectionInput request;
    public DcimInterfaceConnectionsCreateRequest withRequest(openapisdk.models.shared.WritableInterfaceConnectionInput request) {
        this.request = request;
        return this;
    }
}