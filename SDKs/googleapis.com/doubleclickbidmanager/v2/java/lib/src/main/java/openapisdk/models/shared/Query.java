package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Query
 * Represents a query.
**/
public class Query {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public QueryMetadata metadata;
    public Query withMetadata(QueryMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public Parameters params;
    public Query withParams(Parameters params) {
        this.params = params;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryId")
    public String queryId;
    public Query withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public QuerySchedule schedule;
    public Query withSchedule(QuerySchedule schedule) {
        this.schedule = schedule;
        return this;
    }
}