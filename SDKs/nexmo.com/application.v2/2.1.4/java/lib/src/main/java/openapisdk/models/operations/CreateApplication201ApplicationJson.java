package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApplication201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public openapisdk.models.shared.Capabilities capabilities;
    public CreateApplication201ApplicationJson withCapabilities(openapisdk.models.shared.Capabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateApplication201ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public CreateApplication201ApplicationJsonKeys keys;
    public CreateApplication201ApplicationJson withKeys(CreateApplication201ApplicationJsonKeys keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateApplication201ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public CreateApplication201ApplicationJsonPrivacy privacy;
    public CreateApplication201ApplicationJson withPrivacy(CreateApplication201ApplicationJsonPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}