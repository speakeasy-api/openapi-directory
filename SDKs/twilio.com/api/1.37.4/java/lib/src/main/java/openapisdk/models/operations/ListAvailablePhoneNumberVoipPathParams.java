package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailablePhoneNumberVoipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListAvailablePhoneNumberVoipPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CountryCode")
    public String countryCode;
    public ListAvailablePhoneNumberVoipPathParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
}