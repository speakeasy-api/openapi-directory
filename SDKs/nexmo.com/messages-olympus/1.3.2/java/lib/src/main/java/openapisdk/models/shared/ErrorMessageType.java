package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorMessageType
 * Invalid message type
**/
public class ErrorMessageType {
    @JsonProperty("detail")
    public String detail;
    public ErrorMessageType withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorMessageType withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorMessageType withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorMessageType withType(String type) {
        this.type = type;
        return this;
    }
}