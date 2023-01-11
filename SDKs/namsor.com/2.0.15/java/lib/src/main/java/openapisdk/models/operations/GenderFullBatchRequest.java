package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderFullBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchPersonalNameIn request;
    public GenderFullBatchRequest withRequest(openapisdk.models.shared.BatchPersonalNameIn request) {
        this.request = request;
        return this;
    }
    public GenderFullBatchSecurity security;
    public GenderFullBatchRequest withSecurity(GenderFullBatchSecurity security) {
        this.security = security;
        return this;
    }
}