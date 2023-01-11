package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorChannel
 * Unsupported channel
**/
public class ErrorChannel {
    @JsonProperty("detail")
    public String detail;
    public ErrorChannel withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorChannel withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorChannel withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorChannel withType(String type) {
        this.type = type;
        return this;
    }
}