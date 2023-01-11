package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RepertoireRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RepertoirEmodifrequest request;
    public RepertoireRequest withRequest(openapisdk.models.shared.RepertoirEmodifrequest request) {
        this.request = request;
        return this;
    }
}