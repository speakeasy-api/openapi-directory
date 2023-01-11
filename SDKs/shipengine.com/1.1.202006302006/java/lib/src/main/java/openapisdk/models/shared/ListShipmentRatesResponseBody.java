package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListShipmentRatesResponseBody
 * A rates information resource
**/
public class ListShipmentRatesResponseBody {
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public ListShipmentRatesResponseBody withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("errors")
    public Error[] errors;
    public ListShipmentRatesResponseBody withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("invalid_rates")
    public ListShipmentRatesResponseBodyRate[] invalidRates;
    public ListShipmentRatesResponseBody withInvalidRates(ListShipmentRatesResponseBodyRate[] invalidRates) {
        this.invalidRates = invalidRates;
        return this;
    }
    @JsonProperty("rate_request_id")
    public java.util.Map<String, Object> rateRequestId;
    public ListShipmentRatesResponseBody withRateRequestId(java.util.Map<String, Object> rateRequestId) {
        this.rateRequestId = rateRequestId;
        return this;
    }
    @JsonProperty("rates")
    public ListShipmentRatesResponseBodyRate[] rates;
    public ListShipmentRatesResponseBody withRates(ListShipmentRatesResponseBodyRate[] rates) {
        this.rates = rates;
        return this;
    }
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public ListShipmentRatesResponseBody withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public ListShipmentRatesResponseBody withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
}