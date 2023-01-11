package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailablePhoneNumberNationalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListAvailablePhoneNumberNationalPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CountryCode")
    public String countryCode;
    public ListAvailablePhoneNumberNationalPathParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
}