package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameIn request;
    public GenderBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameIn request) {
        this.request = request;
        return this;
    }
    public GenderBatchSecurity security;
    public GenderBatchRequest withSecurity(GenderBatchSecurity security) {
        this.security = security;
        return this;
    }
}