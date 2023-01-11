package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryInput
 * Represents a query.
**/
public class QueryInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public QueryMetadata metadata;
    public QueryInput withMetadata(QueryMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public Parameters params;
    public QueryInput withParams(Parameters params) {
        this.params = params;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public QuerySchedule schedule;
    public QueryInput withSchedule(QuerySchedule schedule) {
        this.schedule = schedule;
        return this;
    }
}