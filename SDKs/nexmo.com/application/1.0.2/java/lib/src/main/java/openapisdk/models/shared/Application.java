package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Application {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public Links links;
    public Application withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Application withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public Keys keys;
    public Application withKeys(Keys keys) {
        this.keys = keys;
        return this;
    }
    @JsonProperty("messages")
    public Messages messages;
    public Application withMessages(Messages messages) {
        this.messages = messages;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Application withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("voice")
    public Voice voice;
    public Application withVoice(Voice voice) {
        this.voice = voice;
        return this;
    }
}