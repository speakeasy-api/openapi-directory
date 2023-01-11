package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CardPatchRequest
 * Body for a patch with optional fields
**/
public class CardPatchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public CardActions actions;
    public CardPatchRequest withActions(CardActions actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display")
    public CardDisplayBody display;
    public CardPatchRequest withDisplay(CardDisplayBody display) {
        this.display = display;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fetch")
    public CardFetchBodyPatch fetch;
    public CardPatchRequest withFetch(CardFetchBodyPatch fetch) {
        this.fetch = fetch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CardPatchRequest withTitle(String title) {
        this.title = title;
        return this;
    }
}