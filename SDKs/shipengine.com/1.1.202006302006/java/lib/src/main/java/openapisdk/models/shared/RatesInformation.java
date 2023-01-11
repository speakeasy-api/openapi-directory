package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RatesInformation
 * A rates information resource
**/
public class RatesInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public RatesInformation withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public RatesInformation withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invalid_rates")
    public RatesInformationRate[] invalidRates;
    public RatesInformation withInvalidRates(RatesInformationRate[] invalidRates) {
        this.invalidRates = invalidRates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_request_id")
    public java.util.Map<String, Object> rateRequestId;
    public RatesInformation withRateRequestId(java.util.Map<String, Object> rateRequestId) {
        this.rateRequestId = rateRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rates")
    public RatesInformationRate[] rates;
    public RatesInformation withRates(RatesInformationRate[] rates) {
        this.rates = rates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public RatesInformation withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public RatesInformation withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
}