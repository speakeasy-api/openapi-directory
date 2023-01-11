package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneValidateRequestBody {
    @SpeakeasyMetadata("form:name=country-code")
    public String countryCode;
    public PhoneValidateRequestBody withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=ip")
    public String ip;
    public PhoneValidateRequestBody withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public PhoneValidateRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public PhoneValidateRequestBodyOutputCaseEnum outputCase;
    public PhoneValidateRequestBody withOutputCase(PhoneValidateRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
}