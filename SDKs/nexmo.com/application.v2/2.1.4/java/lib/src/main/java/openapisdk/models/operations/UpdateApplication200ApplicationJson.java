package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApplication200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public openapisdk.models.shared.Capabilities capabilities;
    public UpdateApplication200ApplicationJson withCapabilities(openapisdk.models.shared.Capabilities capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateApplication200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public UpdateApplication200ApplicationJsonKeys keys;
    public UpdateApplication200ApplicationJson withKeys(UpdateApplication200ApplicationJsonKeys keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateApplication200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy")
    public UpdateApplication200ApplicationJsonPrivacy privacy;
    public UpdateApplication200ApplicationJson withPrivacy(UpdateApplication200ApplicationJsonPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
}