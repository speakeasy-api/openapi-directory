package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorPrematureRedaction
 * Premature Redaction
**/
public class ErrorPrematureRedaction {
    @JsonProperty("detail")
    public String detail;
    public ErrorPrematureRedaction withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorPrematureRedaction withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorPrematureRedaction withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorPrematureRedaction withType(String type) {
        this.type = type;
        return this;
    }
}