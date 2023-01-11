package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentUserJson200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public GetUserContentUserJson200ApplicationJson withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debug")
    public GetUserContentUserJson200ApplicationJsonDebug debug;
    public GetUserContentUserJson200ApplicationJson withDebug(GetUserContentUserJson200ApplicationJsonDebug debug) {
        this.debug = debug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetUserContentUserJson200ApplicationJsonResults results;
    public GetUserContentUserJson200ApplicationJson withResults(GetUserContentUserJson200ApplicationJsonResults results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetUserContentUserJson200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}