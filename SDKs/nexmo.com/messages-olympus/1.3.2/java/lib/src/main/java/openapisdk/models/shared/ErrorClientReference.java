package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorClientReference
 * Invalid client reference
**/
public class ErrorClientReference {
    @JsonProperty("detail")
    public String detail;
    public ErrorClientReference withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorClientReference withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorClientReference withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorClientReference withType(String type) {
        this.type = type;
        return this;
    }
}