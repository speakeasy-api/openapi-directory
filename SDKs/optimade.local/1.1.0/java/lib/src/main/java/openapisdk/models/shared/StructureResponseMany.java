package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StructureResponseMany
 * errors are not allowed
**/
public class StructureResponseMany {
    @JsonProperty("data")
    public Object data;
    public StructureResponseMany withData(Object data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public StructureResponseMany withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Object included;
    public StructureResponseMany withIncluded(Object included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonapi")
    public StructureResponseManyJsonApi jsonapi;
    public StructureResponseMany withJsonapi(StructureResponseManyJsonApi jsonapi) {
        this.jsonapi = jsonapi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public StructureResponseManyToplevelLinks links;
    public StructureResponseMany withLinks(StructureResponseManyToplevelLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public StructureResponseManyResponseMeta meta;
    public StructureResponseMany withMeta(StructureResponseManyResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}