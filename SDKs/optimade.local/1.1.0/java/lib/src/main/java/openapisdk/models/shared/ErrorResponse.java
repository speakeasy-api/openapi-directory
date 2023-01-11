package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorResponse
 * errors MUST be present and data MUST be skipped
**/
public class ErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Object data;
    public ErrorResponse withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonProperty("errors")
    public OptimadeError[] errors;
    public ErrorResponse withErrors(OptimadeError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Resource[] included;
    public ErrorResponse withIncluded(Resource[] included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonapi")
    public ErrorResponseJsonApi jsonapi;
    public ErrorResponse withJsonapi(ErrorResponseJsonApi jsonapi) {
        this.jsonapi = jsonapi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ErrorResponseToplevelLinks links;
    public ErrorResponse withLinks(ErrorResponseToplevelLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ErrorResponseResponseMeta meta;
    public ErrorResponse withMeta(ErrorResponseResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}