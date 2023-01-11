package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferNumber422ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public TransferNumber422ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public TransferNumber422ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("invalid_parameters")
    public TransferNumber422ApplicationJsonInvalidParameters[] invalidParameters;
    public TransferNumber422ApplicationJson withInvalidParameters(TransferNumber422ApplicationJsonInvalidParameters[] invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public TransferNumber422ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransferNumber422ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}