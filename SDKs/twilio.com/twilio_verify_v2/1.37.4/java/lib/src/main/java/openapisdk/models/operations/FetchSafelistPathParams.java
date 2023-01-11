package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchSafelistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PhoneNumber")
    public String phoneNumber;
    public FetchSafelistPathParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}