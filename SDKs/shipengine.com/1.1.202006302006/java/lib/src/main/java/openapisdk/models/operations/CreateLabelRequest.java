package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLabelRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLabelRequestBodyInput request;
    public CreateLabelRequest withRequest(openapisdk.models.shared.CreateLabelRequestBodyInput request) {
        this.request = request;
        return this;
    }
}