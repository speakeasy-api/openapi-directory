package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorSender
 * Invalid sender
**/
public class ErrorSender {
    @JsonProperty("detail")
    public String detail;
    public ErrorSender withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorSender withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorSender withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorSender withType(String type) {
        this.type = type;
        return this;
    }
}