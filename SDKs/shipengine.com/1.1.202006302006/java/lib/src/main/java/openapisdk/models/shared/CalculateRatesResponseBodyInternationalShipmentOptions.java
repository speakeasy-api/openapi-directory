package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CalculateRatesResponseBodyInternationalShipmentOptions
 * Options for international shipments, such as customs declarations.
**/
public class CalculateRatesResponseBodyInternationalShipmentOptions {
    @JsonProperty("contents")
    public java.util.Map<String, Object> contents;
    public CalculateRatesResponseBodyInternationalShipmentOptions withContents(java.util.Map<String, Object> contents) {
        this.contents = contents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customs_items")
    public CustomsItem[] customsItems;
    public CalculateRatesResponseBodyInternationalShipmentOptions withCustomsItems(CustomsItem[] customsItems) {
        this.customsItems = customsItems;
        return this;
    }
    @JsonProperty("non_delivery")
    public java.util.Map<String, Object> nonDelivery;
    public CalculateRatesResponseBodyInternationalShipmentOptions withNonDelivery(java.util.Map<String, Object> nonDelivery) {
        this.nonDelivery = nonDelivery;
        return this;
    }
}