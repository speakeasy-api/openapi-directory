package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferBalance422ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public TransferBalance422ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public TransferBalance422ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("invalid_parameters")
    public TransferBalance422ApplicationJsonInvalidParameters[] invalidParameters;
    public TransferBalance422ApplicationJson withInvalidParameters(TransferBalance422ApplicationJsonInvalidParameters[] invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public TransferBalance422ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransferBalance422ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}