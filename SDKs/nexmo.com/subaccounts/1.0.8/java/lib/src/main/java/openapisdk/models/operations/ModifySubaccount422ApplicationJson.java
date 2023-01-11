package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifySubaccount422ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public ModifySubaccount422ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ModifySubaccount422ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("invalid_parameters")
    public ModifySubaccount422ApplicationJsonInvalidParameters[] invalidParameters;
    public ModifySubaccount422ApplicationJson withInvalidParameters(ModifySubaccount422ApplicationJsonInvalidParameters[] invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ModifySubaccount422ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ModifySubaccount422ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}