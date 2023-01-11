package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAvailablePhoneNumberMachineToMachinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListAvailablePhoneNumberMachineToMachinePathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CountryCode")
    public String countryCode;
    public ListAvailablePhoneNumberMachineToMachinePathParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
}