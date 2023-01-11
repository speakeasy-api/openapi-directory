package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubaccountAddRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubaccountAddRequest request;
    public SubaccountAddRequest withRequest(openapisdk.models.shared.SubaccountAddRequest request) {
        this.request = request;
        return this;
    }
}