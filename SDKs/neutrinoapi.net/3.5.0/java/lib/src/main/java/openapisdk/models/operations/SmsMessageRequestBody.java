package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmsMessageRequestBody {
    @SpeakeasyMetadata("form:name=country-code")
    public String countryCode;
    public SmsMessageRequestBody withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=limit")
    public Integer limit;
    public SmsMessageRequestBody withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("form:name=limit-ttl")
    public Integer limitTtl;
    public SmsMessageRequestBody withLimitTtl(Integer limitTtl) {
        this.limitTtl = limitTtl;
        return this;
    }
    @SpeakeasyMetadata("form:name=message")
    public String message;
    public SmsMessageRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public SmsMessageRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public SmsMessageRequestBodyOutputCaseEnum outputCase;
    public SmsMessageRequestBody withOutputCase(SmsMessageRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
}