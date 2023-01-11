package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CardResponse
 * Current state of Card Definition
**/
public class CardResponse {
    @JsonProperty("actions")
    public CardActions actions;
    public CardResponse withActions(CardActions actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public CardResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("display")
    public CardDisplayBody display;
    public CardResponse withDisplay(CardDisplayBody display) {
        this.display = display;
        return this;
    }
    @JsonProperty("fetch")
    public CardFetchBody fetch;
    public CardResponse withFetch(CardFetchBody fetch) {
        this.fetch = fetch;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CardResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public CardResponse withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public CardResponse withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}