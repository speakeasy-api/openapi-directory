package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectRequestBody {
    @SpeakeasyMetadata("multipartForm:name=callback_url")
    public String callbackUrl;
    public CreateProjectRequestBody withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=coupon_code")
    public String couponCode;
    public CreateProjectRequestBody withCouponCode(String couponCode) {
        this.couponCode = couponCode;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=custom,json")
    public String[] custom;
    public CreateProjectRequestBody withCustom(String[] custom) {
        this.custom = custom;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public CreateProjectRequestBodyDocuments documents;
    public CreateProjectRequestBody withDocuments(CreateProjectRequestBodyDocuments documents) {
        this.documents = documents;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public CreateProjectRequestBodyGlossaries glossaries;
    public CreateProjectRequestBody withGlossaries(CreateProjectRequestBodyGlossaries glossaries) {
        this.glossaries = glossaries;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=source_language")
    public String sourceLanguage;
    public CreateProjectRequestBody withSourceLanguage(String sourceLanguage) {
        this.sourceLanguage = sourceLanguage;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public CreateProjectRequestBodyStyleguides styleguides;
    public CreateProjectRequestBody withStyleguides(CreateProjectRequestBodyStyleguides styleguides) {
        this.styleguides = styleguides;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=target_languages[],json")
    public String[] targetLanguages;
    public CreateProjectRequestBody withTargetLanguages(String[] targetLanguages) {
        this.targetLanguages = targetLanguages;
        return this;
    }
}