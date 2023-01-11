package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSafelistCreateSafelistRequest {
    @SpeakeasyMetadata("form:name=PhoneNumber")
    public String phoneNumber;
    public CreateSafelistCreateSafelistRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}