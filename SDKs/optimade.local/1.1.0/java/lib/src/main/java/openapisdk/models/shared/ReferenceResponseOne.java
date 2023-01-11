package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResponseOne
 * errors are not allowed
**/
public class ReferenceResponseOne {
    @JsonProperty("data")
    public Object data;
    public ReferenceResponseOne withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public ReferenceResponseOne withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Object included;
    public ReferenceResponseOne withIncluded(Object included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonapi")
    public ReferenceResponseOneJsonApi jsonapi;
    public ReferenceResponseOne withJsonapi(ReferenceResponseOneJsonApi jsonapi) {
        this.jsonapi = jsonapi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ReferenceResponseOneToplevelLinks links;
    public ReferenceResponseOne withLinks(ReferenceResponseOneToplevelLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ReferenceResponseOneResponseMeta meta;
    public ReferenceResponseOne withMeta(ReferenceResponseOneResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}