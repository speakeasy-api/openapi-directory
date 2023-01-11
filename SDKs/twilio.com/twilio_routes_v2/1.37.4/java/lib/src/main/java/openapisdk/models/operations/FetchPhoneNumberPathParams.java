package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchPhoneNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PhoneNumber")
    public String phoneNumber;
    public FetchPhoneNumberPathParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}