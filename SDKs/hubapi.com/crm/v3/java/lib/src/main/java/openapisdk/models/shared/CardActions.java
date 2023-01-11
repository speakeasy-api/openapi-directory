package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CardActions
 * Configuration for custom user actions on cards.
**/
public class CardActions {
    @JsonProperty("baseUrls")
    public String[] baseUrls;
    public CardActions withBaseUrls(String[] baseUrls) {
        this.baseUrls = baseUrls;
        return this;
    }
}