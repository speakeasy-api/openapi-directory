package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectRequestBody {
    @SpeakeasyMetadata("multipartForm:name=callback_url")
    public String callbackUrl;
    public UpdateProjectRequestBody withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=coupon_code")
    public String couponCode;
    public UpdateProjectRequestBody withCouponCode(String couponCode) {
        this.couponCode = couponCode;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=custom,json")
    public String[] custom;
    public UpdateProjectRequestBody withCustom(String[] custom) {
        this.custom = custom;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=source_language")
    public String sourceLanguage;
    public UpdateProjectRequestBody withSourceLanguage(String sourceLanguage) {
        this.sourceLanguage = sourceLanguage;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=target_languages[],json")
    public String[] targetLanguages;
    public UpdateProjectRequestBody withTargetLanguages(String[] targetLanguages) {
        this.targetLanguages = targetLanguages;
        return this;
    }
}