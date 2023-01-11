package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParseNameBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchPersonalNameIn request;
    public ParseNameBatchRequest withRequest(openapisdk.models.shared.BatchPersonalNameIn request) {
        this.request = request;
        return this;
    }
    public ParseNameBatchSecurity security;
    public ParseNameBatchRequest withSecurity(ParseNameBatchSecurity security) {
        this.security = security;
        return this;
    }
}