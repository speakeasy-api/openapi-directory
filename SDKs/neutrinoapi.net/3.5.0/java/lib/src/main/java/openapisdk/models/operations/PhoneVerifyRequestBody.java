package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneVerifyRequestBody {
    @SpeakeasyMetadata("form:name=code-length")
    public Integer codeLength;
    public PhoneVerifyRequestBody withCodeLength(Integer codeLength) {
        this.codeLength = codeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=country-code")
    public String countryCode;
    public PhoneVerifyRequestBody withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=language-code")
    public String languageCode;
    public PhoneVerifyRequestBody withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=limit")
    public Integer limit;
    public PhoneVerifyRequestBody withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("form:name=limit-ttl")
    public Integer limitTtl;
    public PhoneVerifyRequestBody withLimitTtl(Integer limitTtl) {
        this.limitTtl = limitTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public PhoneVerifyRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public PhoneVerifyRequestBodyOutputCaseEnum outputCase;
    public PhoneVerifyRequestBody withOutputCase(PhoneVerifyRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=playback-delay")
    public Integer playbackDelay;
    public PhoneVerifyRequestBody withPlaybackDelay(Integer playbackDelay) {
        this.playbackDelay = playbackDelay;
        return this;
    }
    @SpeakeasyMetadata("form:name=security-code")
    public Integer securityCode;
    public PhoneVerifyRequestBody withSecurityCode(Integer securityCode) {
        this.securityCode = securityCode;
        return this;
    }
}