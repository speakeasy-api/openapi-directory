package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GenericProblem
 * A generic problem with no additional information beyond that provided by the HTTP status code.
**/
public class GenericProblem {
    @JsonProperty("detail")
    public String detail;
    public GenericProblem withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("status")
    public Long status;
    public GenericProblem withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public GenericProblem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GenericProblem withType(String type) {
        this.type = type;
        return this;
    }
}