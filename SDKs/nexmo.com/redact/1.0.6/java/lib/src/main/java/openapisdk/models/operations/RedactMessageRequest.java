package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RedactMessageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RedactTransaction request;
    public RedactMessageRequest withRequest(openapisdk.models.shared.RedactTransaction request) {
        this.request = request;
        return this;
    }
    public RedactMessageSecurity security;
    public RedactMessageRequest withSecurity(RedactMessageSecurity security) {
        this.security = security;
        return this;
    }
}