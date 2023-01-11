package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReferenceResponseMany
 * errors are not allowed
**/
public class ReferenceResponseMany {
    @JsonProperty("data")
    public Object data;
    public ReferenceResponseMany withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public ReferenceResponseMany withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Object included;
    public ReferenceResponseMany withIncluded(Object included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonapi")
    public ReferenceResponseManyJsonApi jsonapi;
    public ReferenceResponseMany withJsonapi(ReferenceResponseManyJsonApi jsonapi) {
        this.jsonapi = jsonapi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ReferenceResponseManyToplevelLinks links;
    public ReferenceResponseMany withLinks(ReferenceResponseManyToplevelLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ReferenceResponseManyResponseMeta meta;
    public ReferenceResponseMany withMeta(ReferenceResponseManyResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}