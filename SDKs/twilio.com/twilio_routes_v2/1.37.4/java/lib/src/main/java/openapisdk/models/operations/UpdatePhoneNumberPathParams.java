package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PhoneNumber")
    public String phoneNumber;
    public UpdatePhoneNumberPathParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}