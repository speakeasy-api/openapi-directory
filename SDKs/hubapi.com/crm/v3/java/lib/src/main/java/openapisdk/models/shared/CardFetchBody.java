package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CardFetchBody
 * Configuration for this card's data fetch request.
**/
public class CardFetchBody {
    @JsonProperty("objectTypes")
    public CardObjectTypeBody[] objectTypes;
    public CardFetchBody withObjectTypes(CardObjectTypeBody[] objectTypes) {
        this.objectTypes = objectTypes;
        return this;
    }
    @JsonProperty("targetUrl")
    public String targetUrl;
    public CardFetchBody withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
}