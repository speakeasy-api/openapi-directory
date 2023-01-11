package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OriginBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNameIn request;
    public OriginBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNameIn request) {
        this.request = request;
        return this;
    }
    public OriginBatchSecurity security;
    public OriginBatchRequest withSecurity(OriginBatchSecurity security) {
        this.security = security;
        return this;
    }
}