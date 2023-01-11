package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CardCreateRequest
 * State of card definition to be created
**/
public class CardCreateRequest {
    @JsonProperty("actions")
    public CardActions actions;
    public CardCreateRequest withActions(CardActions actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("display")
    public CardDisplayBody display;
    public CardCreateRequest withDisplay(CardDisplayBody display) {
        this.display = display;
        return this;
    }
    @JsonProperty("fetch")
    public CardFetchBody fetch;
    public CardCreateRequest withFetch(CardFetchBody fetch) {
        this.fetch = fetch;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public CardCreateRequest withTitle(String title) {
        this.title = title;
        return this;
    }
}