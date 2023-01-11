package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAddressUpdateAddressRequest {
    @SpeakeasyMetadata("form:name=AutoCorrectAddress")
    public Boolean autoCorrectAddress;
    public UpdateAddressUpdateAddressRequest withAutoCorrectAddress(Boolean autoCorrectAddress) {
        this.autoCorrectAddress = autoCorrectAddress;
        return this;
    }
    @SpeakeasyMetadata("form:name=City")
    public String city;
    public UpdateAddressUpdateAddressRequest withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("form:name=CustomerName")
    public String customerName;
    public UpdateAddressUpdateAddressRequest withCustomerName(String customerName) {
        this.customerName = customerName;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmergencyEnabled")
    public Boolean emergencyEnabled;
    public UpdateAddressUpdateAddressRequest withEmergencyEnabled(Boolean emergencyEnabled) {
        this.emergencyEnabled = emergencyEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateAddressUpdateAddressRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=PostalCode")
    public String postalCode;
    public UpdateAddressUpdateAddressRequest withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=Region")
    public String region;
    public UpdateAddressUpdateAddressRequest withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("form:name=Street")
    public String street;
    public UpdateAddressUpdateAddressRequest withStreet(String street) {
        this.street = street;
        return this;
    }
}