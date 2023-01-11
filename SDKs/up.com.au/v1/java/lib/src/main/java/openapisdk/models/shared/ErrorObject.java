package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorObject
 * Provides information about an error processing a request.
 * 
**/
public class ErrorObject {
    @JsonProperty("detail")
    public String detail;
    public ErrorObject withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ErrorObjectSource source;
    public ErrorObject withSource(ErrorObjectSource source) {
        this.source = source;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public ErrorObject withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorObject withTitle(String title) {
        this.title = title;
        return this;
    }
}