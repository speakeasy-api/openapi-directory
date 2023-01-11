package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApiSocialNumberRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.NumberValidation numberValidation;
    public PostApiSocialNumberRequests withNumberValidation(openapisdk.models.shared.NumberValidation numberValidation) {
        this.numberValidation = numberValidation;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NumberValidation numberValidation1;
    public PostApiSocialNumberRequests withNumberValidation1(openapisdk.models.shared.NumberValidation numberValidation1) {
        this.numberValidation1 = numberValidation1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.NumberValidation numberValidation2;
    public PostApiSocialNumberRequests withNumberValidation2(openapisdk.models.shared.NumberValidation numberValidation2) {
        this.numberValidation2 = numberValidation2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.NumberValidation numberValidation3;
    public PostApiSocialNumberRequests withNumberValidation3(openapisdk.models.shared.NumberValidation numberValidation3) {
        this.numberValidation3 = numberValidation3;
        return this;
    }
}