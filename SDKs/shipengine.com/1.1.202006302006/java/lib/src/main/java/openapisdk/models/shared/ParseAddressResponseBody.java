package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ParseAddressResponseBody
 * The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.
 * 
**/
public class ParseAddressResponseBody {
    @JsonProperty("address")
    public PartialAddress address;
    public ParseAddressResponseBody withAddress(PartialAddress address) {
        this.address = address;
        return this;
    }
    @JsonProperty("entities")
    public RecognizedEntity[] entities;
    public ParseAddressResponseBody withEntities(RecognizedEntity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonProperty("score")
    public Double score;
    public ParseAddressResponseBody withScore(Double score) {
        this.score = score;
        return this;
    }
}