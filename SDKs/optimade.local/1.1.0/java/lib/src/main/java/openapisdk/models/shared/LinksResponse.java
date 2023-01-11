package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinksResponse
 * errors are not allowed
**/
public class LinksResponse {
    @JsonProperty("data")
    public Object data;
    public LinksResponse withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public LinksResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Object included;
    public LinksResponse withIncluded(Object included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonapi")
    public LinksResponseJsonApi jsonapi;
    public LinksResponse withJsonapi(LinksResponseJsonApi jsonapi) {
        this.jsonapi = jsonapi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public LinksResponseToplevelLinks links;
    public LinksResponse withLinks(LinksResponseToplevelLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public LinksResponseResponseMeta meta;
    public LinksResponse withMeta(LinksResponseResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}