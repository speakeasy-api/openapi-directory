package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateConversation200ApplicationJson {
    @JsonProperty("href")
    public String href;
    public CreateConversation200ApplicationJson withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CreateConversation200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
}