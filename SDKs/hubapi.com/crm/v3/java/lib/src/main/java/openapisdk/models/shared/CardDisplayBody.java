package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CardDisplayBody
 * Configuration for displayed info on a card
**/
public class CardDisplayBody {
    @JsonProperty("properties")
    public CardDisplayProperty[] properties;
    public CardDisplayBody withProperties(CardDisplayProperty[] properties) {
        this.properties = properties;
        return this;
    }
}