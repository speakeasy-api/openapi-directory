package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_requirements")
    public String addressRequirements;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withAddressRequirements(String addressRequirements) {
        this.addressRequirements = addressRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beta")
    public Boolean beta;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoipCapabilities capabilities;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withCapabilities(ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoipCapabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lata")
    public String lata;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withLata(String lata) {
        this.lata = lata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locality")
    public String locality;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withLocality(String locality) {
        this.locality = locality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postal_code")
    public String postalCode;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_center")
    public String rateCenter;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withRateCenter(String rateCenter) {
        this.rateCenter = rateCenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip withRegion(String region) {
        this.region = region;
        return this;
    }
}