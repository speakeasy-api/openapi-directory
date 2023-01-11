package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorUnauthorizedMissingCredentials
 * Missing or Invalid Credentials
**/
public class ErrorUnauthorizedMissingCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public ErrorUnauthorizedMissingCredentials withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorUnauthorizedMissingCredentials withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorUnauthorizedMissingCredentials withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorUnauthorizedMissingCredentials withType(String type) {
        this.type = type;
        return this;
    }
}