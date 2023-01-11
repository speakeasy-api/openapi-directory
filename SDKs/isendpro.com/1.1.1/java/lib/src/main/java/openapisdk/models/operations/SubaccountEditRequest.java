package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubaccountEditRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubaccountRequest request;
    public SubaccountEditRequest withRequest(openapisdk.models.shared.SubaccountRequest request) {
        this.request = request;
        return this;
    }
}