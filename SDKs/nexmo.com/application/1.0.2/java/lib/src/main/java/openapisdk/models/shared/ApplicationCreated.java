package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApplicationCreated {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public Links links;
    public ApplicationCreated withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ApplicationCreated withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public KeysWithPrivateKey keys;
    public ApplicationCreated withKeys(KeysWithPrivateKey keys) {
        this.keys = keys;
        return this;
    }
    @JsonProperty("messages")
    public Messages messages;
    public ApplicationCreated withMessages(Messages messages) {
        this.messages = messages;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ApplicationCreated withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("voice")
    public Voice voice;
    public ApplicationCreated withVoice(Voice voice) {
        this.voice = voice;
        return this;
    }
}