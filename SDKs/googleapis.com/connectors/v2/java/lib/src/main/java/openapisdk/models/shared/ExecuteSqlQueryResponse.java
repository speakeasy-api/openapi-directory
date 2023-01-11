package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecuteSqlQueryResponse
 * A response returned by the connection after executing the sql query.
**/
public class ExecuteSqlQueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public java.util.Map<String, Object>[] results;
    public ExecuteSqlQueryResponse withResults(java.util.Map<String, Object>[] results) {
        this.results = results;
        return this;
    }
}