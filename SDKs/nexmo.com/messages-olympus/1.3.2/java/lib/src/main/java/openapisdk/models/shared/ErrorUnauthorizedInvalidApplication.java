package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorUnauthorizedInvalidApplication
 * Invalid Application Type
**/
public class ErrorUnauthorizedInvalidApplication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public ErrorUnauthorizedInvalidApplication withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorUnauthorizedInvalidApplication withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorUnauthorizedInvalidApplication withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorUnauthorizedInvalidApplication withType(String type) {
        this.type = type;
        return this;
    }
}