package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnterpriseAuthObtainRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Login request;
    public PostEnterpriseAuthObtainRequest withRequest(openapisdk.models.shared.Login request) {
        this.request = request;
        return this;
    }
}