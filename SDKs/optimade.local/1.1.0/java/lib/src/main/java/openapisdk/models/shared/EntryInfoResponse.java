package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntryInfoResponse
 * errors are not allowed
**/
public class EntryInfoResponse {
    @JsonProperty("data")
    public EntryInfoResponseEntryInfoResource data;
    public EntryInfoResponse withData(EntryInfoResponseEntryInfoResource data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public EntryInfoResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Resource[] included;
    public EntryInfoResponse withIncluded(Resource[] included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonapi")
    public EntryInfoResponseJsonApi jsonapi;
    public EntryInfoResponse withJsonapi(EntryInfoResponseJsonApi jsonapi) {
        this.jsonapi = jsonapi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public EntryInfoResponseToplevelLinks links;
    public EntryInfoResponse withLinks(EntryInfoResponseToplevelLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public EntryInfoResponseResponseMeta meta;
    public EntryInfoResponse withMeta(EntryInfoResponseResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}