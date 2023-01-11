package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabaseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public QueryADatabaseRequestBodyFilter filter;
    public QueryADatabaseRequestBody withFilter(QueryADatabaseRequestBodyFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sorts")
    public QueryADatabaseRequestBodySorts[] sorts;
    public QueryADatabaseRequestBody withSorts(QueryADatabaseRequestBodySorts[] sorts) {
        this.sorts = sorts;
        return this;
    }
}