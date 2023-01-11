package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneCodeGeoFeedbackLoopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryIso2")
    public String countryIso2;
    public PhoneCodeGeoFeedbackLoopPathParams withCountryIso2(String countryIso2) {
        this.countryIso2 = countryIso2;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstName")
    public String firstName;
    public PhoneCodeGeoFeedbackLoopPathParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastName")
    public String lastName;
    public PhoneCodeGeoFeedbackLoopPathParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=phoneNumber")
    public String phoneNumber;
    public PhoneCodeGeoFeedbackLoopPathParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=phoneNumberE164")
    public String phoneNumberE164;
    public PhoneCodeGeoFeedbackLoopPathParams withPhoneNumberE164(String phoneNumberE164) {
        this.phoneNumberE164 = phoneNumberE164;
        return this;
    }
}