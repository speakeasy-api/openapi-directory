package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReplaceConversation200ApplicationJson {
    @JsonProperty("href")
    public String href;
    public ReplaceConversation200ApplicationJson withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ReplaceConversation200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
}