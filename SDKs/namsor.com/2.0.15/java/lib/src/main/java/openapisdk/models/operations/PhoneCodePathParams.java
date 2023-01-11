package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstName")
    public String firstName;
    public PhoneCodePathParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastName")
    public String lastName;
    public PhoneCodePathParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=phoneNumber")
    public String phoneNumber;
    public PhoneCodePathParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}