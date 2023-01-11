package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProvideFeedbackRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ProvideFeedbackRequestBody request;
    public ProvideFeedbackRequest withRequest(ProvideFeedbackRequestBody request) {
        this.request = request;
        return this;
    }
    public ProvideFeedbackSecurity security;
    public ProvideFeedbackRequest withSecurity(ProvideFeedbackSecurity security) {
        this.security = security;
        return this;
    }
}