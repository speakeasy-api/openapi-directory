package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferCredit422ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public TransferCredit422ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public TransferCredit422ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("invalid_parameters")
    public TransferCredit422ApplicationJsonInvalidParameters[] invalidParameters;
    public TransferCredit422ApplicationJson withInvalidParameters(TransferCredit422ApplicationJsonInvalidParameters[] invalidParameters) {
        this.invalidParameters = invalidParameters;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public TransferCredit422ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransferCredit422ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}