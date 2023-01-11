package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishExtensionRequest {
    public PublishExtensionHeaders headers;
    public PublishExtensionRequest withHeaders(PublishExtensionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExtensionData request;
    public PublishExtensionRequest withRequest(openapisdk.models.shared.ExtensionData request) {
        this.request = request;
        return this;
    }
}