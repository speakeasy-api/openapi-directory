package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAddressCreateAddressRequest {
    @SpeakeasyMetadata("form:name=AutoCorrectAddress")
    public Boolean autoCorrectAddress;
    public CreateAddressCreateAddressRequest withAutoCorrectAddress(Boolean autoCorrectAddress) {
        this.autoCorrectAddress = autoCorrectAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=City")
    public String city;
    public CreateAddressCreateAddressRequest withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("form:name=CustomerName")
    public String customerName;
    public CreateAddressCreateAddressRequest withCustomerName(String customerName) {
        this.customerName = customerName;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyEnabled")
    public Boolean emergencyEnabled;
    public CreateAddressCreateAddressRequest withEmergencyEnabled(Boolean emergencyEnabled) {
        this.emergencyEnabled = emergencyEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateAddressCreateAddressRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=IsoCountry")
    public String isoCountry;
    public CreateAddressCreateAddressRequest withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @SpeakeasyMetadata("form:name=PostalCode")
    public String postalCode;
    public CreateAddressCreateAddressRequest withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=Region")
    public String region;
    public CreateAddressCreateAddressRequest withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("form:name=Street")
    public String street;
    public CreateAddressCreateAddressRequest withStreet(String street) {
        this.street = street;
        return this;
    }
}