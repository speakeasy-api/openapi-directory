package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class News200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public News200ApplicationJsonEntries[] entries;
    public News200ApplicationJson withEntries(News200ApplicationJsonEntries[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feed")
    public News200ApplicationJsonFeed feed;
    public News200ApplicationJson withFeed(News200ApplicationJsonFeed feed) {
        this.feed = feed;
        return this;
    }
}