package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TagShipmentResponseBody
 * A shipment add tag response body
**/
public class TagShipmentResponseBody {
    @JsonProperty("shipment_id")
    public java.util.Map<String, Object> shipmentId;
    public TagShipmentResponseBody withShipmentId(java.util.Map<String, Object> shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @JsonProperty("tag")
    public TagShipmentResponseBodyTag tag;
    public TagShipmentResponseBody withTag(TagShipmentResponseBodyTag tag) {
        this.tag = tag;
        return this;
    }
}