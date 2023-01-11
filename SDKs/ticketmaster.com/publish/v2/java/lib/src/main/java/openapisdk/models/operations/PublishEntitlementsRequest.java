package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishEntitlementsRequest {
    public PublishEntitlementsHeaders headers;
    public PublishEntitlementsRequest withHeaders(PublishEntitlementsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Entitlement request;
    public PublishEntitlementsRequest withRequest(openapisdk.models.shared.Entitlement request) {
        this.request = request;
        return this;
    }
}