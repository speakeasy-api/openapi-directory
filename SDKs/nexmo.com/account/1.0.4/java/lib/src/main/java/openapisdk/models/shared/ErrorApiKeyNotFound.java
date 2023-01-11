package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorApiKeyNotFound
 * This API key was not recognised
**/
public class ErrorApiKeyNotFound {
    @JsonProperty("detail")
    public String detail;
    public ErrorApiKeyNotFound withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorApiKeyNotFound withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorApiKeyNotFound withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorApiKeyNotFound withType(String type) {
        this.type = type;
        return this;
    }
}