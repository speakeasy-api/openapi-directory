package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDependentPhoneNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AccountSid")
    public String accountSid;
    public ListDependentPhoneNumberPathParams withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=AddressSid")
    public String addressSid;
    public ListDependentPhoneNumberPathParams withAddressSid(String addressSid) {
        this.addressSid = addressSid;
        return this;
    }
}