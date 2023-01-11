package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentUrlJson200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public GetUserContentUrlJson200ApplicationJson withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debug")
    public GetUserContentUrlJson200ApplicationJsonDebug debug;
    public GetUserContentUrlJson200ApplicationJson withDebug(GetUserContentUrlJson200ApplicationJsonDebug debug) {
        this.debug = debug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetUserContentUrlJson200ApplicationJsonResults results;
    public GetUserContentUrlJson200ApplicationJson withResults(GetUserContentUrlJson200ApplicationJsonResults results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetUserContentUrlJson200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}