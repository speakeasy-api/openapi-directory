package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentByDateJson200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public GetUserContentByDateJson200ApplicationJson withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debug")
    public GetUserContentByDateJson200ApplicationJsonDebug debug;
    public GetUserContentByDateJson200ApplicationJson withDebug(GetUserContentByDateJson200ApplicationJsonDebug debug) {
        this.debug = debug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetUserContentByDateJson200ApplicationJsonResults results;
    public GetUserContentByDateJson200ApplicationJson withResults(GetUserContentByDateJson200ApplicationJsonResults results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetUserContentByDateJson200ApplicationJson withStatus(String status) {
        this.status = status;
        return this;
    }
}