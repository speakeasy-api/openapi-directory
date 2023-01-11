package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchPhoneNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AddOns")
    public String[] addOns;
    public FetchPhoneNumberQueryParams withAddOns(String[] addOns) {
        this.addOns = addOns;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AddOnsData")
    public java.util.Map<String, Object> addOnsData;
    public FetchPhoneNumberQueryParams withAddOnsData(java.util.Map<String, Object> addOnsData) {
        this.addOnsData = addOnsData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CountryCode")
    public String countryCode;
    public FetchPhoneNumberQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Type")
    public String[] type;
    public FetchPhoneNumberQueryParams withType(String[] type) {
        this.type = type;
        return this;
    }
}