package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimFrontPortsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableFrontPortInput request;
    public DcimFrontPortsCreateRequest withRequest(openapisdk.models.shared.WritableFrontPortInput request) {
        this.request = request;
        return this;
    }
}