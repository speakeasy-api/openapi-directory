package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrganizationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateOrganizationRequestBody request;
    public CreateOrganizationRequest withRequest(CreateOrganizationRequestBody request) {
        this.request = request;
        return this;
    }
}