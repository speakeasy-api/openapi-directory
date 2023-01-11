package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParseShipmentRequestBodyInput
 * The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.
 * 
**/
public class ParseShipmentRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment")
    public PartialShipmentInput shipment;
    public ParseShipmentRequestBodyInput withShipment(PartialShipmentInput shipment) {
        this.shipment = shipment;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public ParseShipmentRequestBodyInput withText(String text) {
        this.text = text;
        return this;
    }
}