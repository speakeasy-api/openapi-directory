package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemWebhookUpdateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemWebhookUpdateRequest request;
    public ItemWebhookUpdateRequest withRequest(openapisdk.models.shared.ItemWebhookUpdateRequest request) {
        this.request = request;
        return this;
    }
}