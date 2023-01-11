package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchResponseError
 * A batch response error
**/
public class BatchResponseError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public BatchResponseError withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public BatchResponseError withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}