package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateShipmentResponseBodyInternationalShipmentOptions
 * Options for international shipments, such as customs declarations.
**/
public class UpdateShipmentResponseBodyInternationalShipmentOptions {
    @JsonProperty("contents")
    public java.util.Map<String, Object> contents;
    public UpdateShipmentResponseBodyInternationalShipmentOptions withContents(java.util.Map<String, Object> contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customs_items")
    public CustomsItem[] customsItems;
    public UpdateShipmentResponseBodyInternationalShipmentOptions withCustomsItems(CustomsItem[] customsItems) {
        this.customsItems = customsItems;
        return this;
    }
    @JsonProperty("non_delivery")
    public java.util.Map<String, Object> nonDelivery;
    public UpdateShipmentResponseBodyInternationalShipmentOptions withNonDelivery(java.util.Map<String, Object> nonDelivery) {
        this.nonDelivery = nonDelivery;
        return this;
    }
}