package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePhoneNumberCreatePhoneNumberRequest {
    @SpeakeasyMetadata("form:name=IsReserved")
    public Boolean isReserved;
    public CreatePhoneNumberCreatePhoneNumberRequest withIsReserved(Boolean isReserved) {
        this.isReserved = isReserved;
        return this;
    }
    @SpeakeasyMetadata("form:name=PhoneNumber")
    public String phoneNumber;
    public CreatePhoneNumberCreatePhoneNumberRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=Sid")
    public String sid;
    public CreatePhoneNumberCreatePhoneNumberRequest withSid(String sid) {
        this.sid = sid;
        return this;
    }
}