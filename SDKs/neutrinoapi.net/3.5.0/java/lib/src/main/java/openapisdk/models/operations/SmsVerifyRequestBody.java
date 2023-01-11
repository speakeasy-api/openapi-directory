package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmsVerifyRequestBody {
    @SpeakeasyMetadata("form:name=code-length")
    public Integer codeLength;
    public SmsVerifyRequestBody withCodeLength(Integer codeLength) {
        this.codeLength = codeLength;
        return this;
    }
    @SpeakeasyMetadata("form:name=country-code")
    public String countryCode;
    public SmsVerifyRequestBody withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=language-code")
    public String languageCode;
    public SmsVerifyRequestBody withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=limit")
    public Integer limit;
    public SmsVerifyRequestBody withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("form:name=limit-ttl")
    public Integer limitTtl;
    public SmsVerifyRequestBody withLimitTtl(Integer limitTtl) {
        this.limitTtl = limitTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public SmsVerifyRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public SmsVerifyRequestBodyOutputCaseEnum outputCase;
    public SmsVerifyRequestBody withOutputCase(SmsVerifyRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=security-code")
    public Integer securityCode;
    public SmsVerifyRequestBody withSecurityCode(Integer securityCode) {
        this.securityCode = securityCode;
        return this;
    }
}