package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryInstantRequest
 * QueryInstantRequest holds all parameters of the Prometheus upstream instant query API plus GCM specific parameters.
**/
public class QueryInstantRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public QueryInstantRequest withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public QueryInstantRequest withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public QueryInstantRequest withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
}