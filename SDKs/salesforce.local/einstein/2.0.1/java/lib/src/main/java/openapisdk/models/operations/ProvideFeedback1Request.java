package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProvideFeedback1Request {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ProvideFeedback1RequestBody request;
    public ProvideFeedback1Request withRequest(ProvideFeedback1RequestBody request) {
        this.request = request;
        return this;
    }
    public ProvideFeedback1Security security;
    public ProvideFeedback1Request withSecurity(ProvideFeedback1Security security) {
        this.security = security;
        return this;
    }
}