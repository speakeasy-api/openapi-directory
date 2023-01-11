package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePhoneNumberCreatePhoneNumberRequest {
    @SpeakeasyMetadata("form:name=PhoneNumberSid")
    public String phoneNumberSid;
    public CreatePhoneNumberCreatePhoneNumberRequest withPhoneNumberSid(String phoneNumberSid) {
        this.phoneNumberSid = phoneNumberSid;
        return this;
    }
}