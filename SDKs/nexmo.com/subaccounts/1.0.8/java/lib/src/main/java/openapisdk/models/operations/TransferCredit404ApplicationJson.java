package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransferCredit404ApplicationJson
 * Invalid API Key
**/
public class TransferCredit404ApplicationJson {
    @JsonProperty("detail")
    public String detail;
    public TransferCredit404ApplicationJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public TransferCredit404ApplicationJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public TransferCredit404ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TransferCredit404ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
}