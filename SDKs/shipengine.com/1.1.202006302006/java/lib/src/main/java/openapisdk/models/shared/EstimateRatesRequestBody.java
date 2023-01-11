package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EstimateRatesRequestBody
 * A rate estimate request body
**/
public class EstimateRatesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address_residential_indicator")
    public AddressResidentialIndicatorEnum addressResidentialIndicator;
    public EstimateRatesRequestBody withAddressResidentialIndicator(AddressResidentialIndicatorEnum addressResidentialIndicator) {
        this.addressResidentialIndicator = addressResidentialIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmation")
    public DeliveryConfirmationEnum confirmation;
    public EstimateRatesRequestBody withConfirmation(DeliveryConfirmationEnum confirmation) {
        this.confirmation = confirmation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public EstimateRatesRequestBody withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonProperty("from_city_locality")
    public String fromCityLocality;
    public EstimateRatesRequestBody withFromCityLocality(String fromCityLocality) {
        this.fromCityLocality = fromCityLocality;
        return this;
    }
    @JsonProperty("from_country_code")
    public String fromCountryCode;
    public EstimateRatesRequestBody withFromCountryCode(String fromCountryCode) {
        this.fromCountryCode = fromCountryCode;
        return this;
    }
    @JsonProperty("from_postal_code")
    public String fromPostalCode;
    public EstimateRatesRequestBody withFromPostalCode(String fromPostalCode) {
        this.fromPostalCode = fromPostalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_state_province")
    public String fromStateProvince;
    public EstimateRatesRequestBody withFromStateProvince(String fromStateProvince) {
        this.fromStateProvince = fromStateProvince;
        return this;
    }
    @JsonProperty("ship_date")
    public java.util.Map<String, Object> shipDate;
    public EstimateRatesRequestBody withShipDate(java.util.Map<String, Object> shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonProperty("to_city_locality")
    public String toCityLocality;
    public EstimateRatesRequestBody withToCityLocality(String toCityLocality) {
        this.toCityLocality = toCityLocality;
        return this;
    }
    @JsonProperty("to_country_code")
    public String toCountryCode;
    public EstimateRatesRequestBody withToCountryCode(String toCountryCode) {
        this.toCountryCode = toCountryCode;
        return this;
    }
    @JsonProperty("to_postal_code")
    public String toPostalCode;
    public EstimateRatesRequestBody withToPostalCode(String toPostalCode) {
        this.toPostalCode = toPostalCode;
        return this;
    }
    @JsonProperty("to_state_province")
    public String toStateProvince;
    public EstimateRatesRequestBody withToStateProvince(String toStateProvince) {
        this.toStateProvince = toStateProvince;
        return this;
    }
    @JsonProperty("weight")
    public Weight weight;
    public EstimateRatesRequestBody withWeight(Weight weight) {
        this.weight = weight;
        return this;
    }
}