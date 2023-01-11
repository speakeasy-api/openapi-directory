package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorRecipient
 * Invalid recipient
**/
public class ErrorRecipient {
    @JsonProperty("detail")
    public String detail;
    public ErrorRecipient withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorRecipient withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorRecipient withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorRecipient withType(String type) {
        this.type = type;
        return this;
    }
}