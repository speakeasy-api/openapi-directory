package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NameTypeBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchNameIn request;
    public NameTypeBatchRequest withRequest(openapisdk.models.shared.BatchNameIn request) {
        this.request = request;
        return this;
    }
    public NameTypeBatchSecurity security;
    public NameTypeBatchRequest withSecurity(NameTypeBatchSecurity security) {
        this.security = security;
        return this;
    }
}