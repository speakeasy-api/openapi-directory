package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSubAccount422ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public CreateSubAccount422ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public CreateSubAccount422ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("invalid_parameters")
    public CreateSubAccount422ApplicationJsonInvalidParameters[] invalidParameters;
    public CreateSubAccount422ApplicationJson withInvalidParameters(CreateSubAccount422ApplicationJsonInvalidParameters[] invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public CreateSubAccount422ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CreateSubAccount422ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}