package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransferNumber401ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public TransferNumber401ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public TransferNumber401ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public TransferNumber401ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransferNumber401ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}