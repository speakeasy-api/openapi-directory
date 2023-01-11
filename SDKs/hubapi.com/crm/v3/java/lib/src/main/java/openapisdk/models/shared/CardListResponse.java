package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CardListResponse
 * List of card definitions
**/
public class CardListResponse {
    @JsonProperty("results")
    public CardResponse[] results;
    public CardListResponse withResults(CardResponse[] results) {
        this.results = results;
        return this;
    }
}