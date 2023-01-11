package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferCredit401ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public TransferCredit401ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public TransferCredit401ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public TransferCredit401ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransferCredit401ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}