package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSafelistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PhoneNumber")
    public String phoneNumber;
    public DeleteSafelistPathParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}