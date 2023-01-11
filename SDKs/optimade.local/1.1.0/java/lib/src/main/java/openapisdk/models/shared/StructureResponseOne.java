package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructureResponseOne
 * errors are not allowed
**/
public class StructureResponseOne {
    @JsonProperty("data")
    public Object data;
    public StructureResponseOne withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public StructureResponseOne withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Object included;
    public StructureResponseOne withIncluded(Object included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonapi")
    public StructureResponseOneJsonApi jsonapi;
    public StructureResponseOne withJsonapi(StructureResponseOneJsonApi jsonapi) {
        this.jsonapi = jsonapi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public StructureResponseOneToplevelLinks links;
    public StructureResponseOne withLinks(StructureResponseOneToplevelLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public StructureResponseOneResponseMeta meta;
    public StructureResponseOne withMeta(StructureResponseOneResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}