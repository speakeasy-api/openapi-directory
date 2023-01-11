package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimCablesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableCableInput request;
    public DcimCablesCreateRequest withRequest(openapisdk.models.shared.WritableCableInput request) {
        this.request = request;
        return this;
    }
}