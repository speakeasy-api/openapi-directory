package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BulkRate
 * A bulk rate
**/
public class BulkRate {
    @JsonProperty("created_at")
    public java.util.Map<String, Object> createdAt;
    public BulkRate withCreatedAt(java.util.Map<String, Object> createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("errors")
    public BulkRateError[] errors;
    public BulkRate withErrors(BulkRateError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("rate_request_id")
    public java.util.Map<String, Object> rateRequestId;
    public BulkRate withRateRequestId(java.util.Map<String, Object> rateRequestId) {
        this.rateRequestId = rateRequestId;
        return this;
    }
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public BulkRate withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonProperty("status")
    public java.util.Map<String, Object> status;
    public BulkRate withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
}