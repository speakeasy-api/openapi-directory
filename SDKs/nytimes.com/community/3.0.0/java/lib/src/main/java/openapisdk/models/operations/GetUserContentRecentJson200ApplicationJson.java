package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentRecentJson200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public GetUserContentRecentJson200ApplicationJson withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debug")
    public GetUserContentRecentJson200ApplicationJsonDebug debug;
    public GetUserContentRecentJson200ApplicationJson withDebug(GetUserContentRecentJson200ApplicationJsonDebug debug) {
        this.debug = debug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetUserContentRecentJson200ApplicationJsonResults results;
    public GetUserContentRecentJson200ApplicationJson withResults(GetUserContentRecentJson200ApplicationJsonResults results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetUserContentRecentJson200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}