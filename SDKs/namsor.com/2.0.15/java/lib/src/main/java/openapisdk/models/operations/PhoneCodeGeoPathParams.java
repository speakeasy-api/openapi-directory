package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneCodeGeoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryIso2")
    public String countryIso2;
    public PhoneCodeGeoPathParams withCountryIso2(String countryIso2) {
        this.countryIso2 = countryIso2;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstName")
    public String firstName;
    public PhoneCodeGeoPathParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastName")
    public String lastName;
    public PhoneCodeGeoPathParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=phoneNumber")
    public String phoneNumber;
    public PhoneCodeGeoPathParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}