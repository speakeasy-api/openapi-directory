package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationGetRequest request;
    public ApplicationGetRequest withRequest(openapisdk.models.shared.ApplicationGetRequest request) {
        this.request = request;
        return this;
    }
}