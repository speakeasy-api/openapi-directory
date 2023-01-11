package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorInvalidJson
 * Invalid JSON
**/
public class ErrorInvalidJson {
    @JsonProperty("detail")
    public String detail;
    public ErrorInvalidJson withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorInvalidJson withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorInvalidJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorInvalidJson withType(String type) {
        this.type = type;
        return this;
    }
}