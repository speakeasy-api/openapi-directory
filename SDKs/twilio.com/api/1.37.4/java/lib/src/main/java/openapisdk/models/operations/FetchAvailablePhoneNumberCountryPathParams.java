package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchAvailablePhoneNumberCountryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public FetchAvailablePhoneNumberCountryPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CountryCode")
    public String countryCode;
    public FetchAvailablePhoneNumberCountryPathParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
}