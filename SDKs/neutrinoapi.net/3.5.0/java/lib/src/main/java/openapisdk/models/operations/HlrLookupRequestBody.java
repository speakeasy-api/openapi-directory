package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HlrLookupRequestBody {
    @SpeakeasyMetadata("form:name=country-code")
    public String countryCode;
    public HlrLookupRequestBody withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=number")
    public String number;
    public HlrLookupRequestBody withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public HlrLookupRequestBodyOutputCaseEnum outputCase;
    public HlrLookupRequestBody withOutputCase(HlrLookupRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
}