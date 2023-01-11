package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePackageTypeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePackageTypeRequestBody request;
    public CreatePackageTypeRequest withRequest(openapisdk.models.shared.CreatePackageTypeRequestBody request) {
        this.request = request;
        return this;
    }
}