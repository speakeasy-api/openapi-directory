package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfacesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInterfaceInput request;
    public DcimInterfacesCreateRequest withRequest(openapisdk.models.shared.WritableInterfaceInput request) {
        this.request = request;
        return this;
    }
}