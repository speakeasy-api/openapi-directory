package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAccountAccessConsentsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObReadConsent1 obReadConsent1;
    public PostAccountAccessConsentsRequests withObReadConsent1(openapisdk.models.shared.ObReadConsent1 obReadConsent1) {
        this.obReadConsent1 = obReadConsent1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ObReadConsent1 obReadConsent2;
    public PostAccountAccessConsentsRequests withObReadConsent2(openapisdk.models.shared.ObReadConsent1 obReadConsent2) {
        this.obReadConsent2 = obReadConsent2;
        return this;
    }
}