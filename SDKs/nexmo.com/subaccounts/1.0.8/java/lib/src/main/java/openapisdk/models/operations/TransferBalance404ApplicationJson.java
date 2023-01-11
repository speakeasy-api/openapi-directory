package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransferBalance404ApplicationJson
 * Invalid API Key
**/
public class TransferBalance404ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public TransferBalance404ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public TransferBalance404ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public TransferBalance404ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransferBalance404ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}