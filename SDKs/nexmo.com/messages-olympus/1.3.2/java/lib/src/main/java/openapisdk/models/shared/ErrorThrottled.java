package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorThrottled {
    @JsonProperty("detail")
    public String detail;
    public ErrorThrottled withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorThrottled withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorThrottled withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorThrottled withType(String type) {
        this.type = type;
        return this;
    }
}