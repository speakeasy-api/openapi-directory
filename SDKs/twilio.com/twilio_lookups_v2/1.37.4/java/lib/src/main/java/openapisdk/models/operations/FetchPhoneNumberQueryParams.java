package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchPhoneNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AddressCountryCode")
    public String addressCountryCode;
    public FetchPhoneNumberQueryParams withAddressCountryCode(String addressCountryCode) {
        this.addressCountryCode = addressCountryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AddressLine1")
    public String addressLine1;
    public FetchPhoneNumberQueryParams withAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AddressLine2")
    public String addressLine2;
    public FetchPhoneNumberQueryParams withAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=City")
    public String city;
    public FetchPhoneNumberQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CountryCode")
    public String countryCode;
    public FetchPhoneNumberQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateOfBirth")
    public String dateOfBirth;
    public FetchPhoneNumberQueryParams withDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Fields")
    public String fields;
    public FetchPhoneNumberQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FirstName")
    public String firstName;
    public FetchPhoneNumberQueryParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LastName")
    public String lastName;
    public FetchPhoneNumberQueryParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NationalId")
    public String nationalId;
    public FetchPhoneNumberQueryParams withNationalId(String nationalId) {
        this.nationalId = nationalId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PostalCode")
    public String postalCode;
    public FetchPhoneNumberQueryParams withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=State")
    public String state;
    public FetchPhoneNumberQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}