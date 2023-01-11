package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ParseShipmentResponseBody
 * The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.
 * 
**/
public class ParseShipmentResponseBody {
    @JsonProperty("entities")
    public RecognizedEntity[] entities;
    public ParseShipmentResponseBody withEntities(RecognizedEntity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonProperty("score")
    public Double score;
    public ParseShipmentResponseBody withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonProperty("shipment")
    public PartialShipment shipment;
    public ParseShipmentResponseBody withShipment(PartialShipment shipment) {
        this.shipment = shipment;
        return this;
    }
}