package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InfoResponse
 * errors are not allowed
**/
public class InfoResponse {
    @JsonProperty("data")
    public InfoResponseBaseInfoResource data;
    public InfoResponse withData(InfoResponseBaseInfoResource data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public InfoResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Resource[] included;
    public InfoResponse withIncluded(Resource[] included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonapi")
    public InfoResponseJsonApi jsonapi;
    public InfoResponse withJsonapi(InfoResponseJsonApi jsonapi) {
        this.jsonapi = jsonapi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public InfoResponseToplevelLinks links;
    public InfoResponse withLinks(InfoResponseToplevelLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public InfoResponseResponseMeta meta;
    public InfoResponse withMeta(InfoResponseResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}