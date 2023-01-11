package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddKvPairsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.KeyValuePairInput request;
    public AddKvPairsRequest withRequest(openapisdk.models.shared.KeyValuePairInput request) {
        this.request = request;
        return this;
    }
}