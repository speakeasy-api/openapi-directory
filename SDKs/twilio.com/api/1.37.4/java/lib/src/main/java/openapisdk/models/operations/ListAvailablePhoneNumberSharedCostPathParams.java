package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailablePhoneNumberSharedCostPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListAvailablePhoneNumberSharedCostPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CountryCode")
    public String countryCode;
    public ListAvailablePhoneNumberSharedCostPathParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
}