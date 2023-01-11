package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShipmentResponseError
 * A shipment response error.
**/
public class ShipmentResponseError {
    @JsonProperty("error")
    public String error;
    public ShipmentResponseError withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_shipment_id")
    public java.util.Map<String, Object> externalShipmentId;
    public ShipmentResponseError withExternalShipmentId(java.util.Map<String, Object> externalShipmentId) {
        this.externalShipmentId = externalShipmentId;
        return this;
    }
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public ShipmentResponseError withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}