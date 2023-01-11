package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryResponse
 * Response message for TargetedQueriesService.Query.
**/
public class QueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnHeaders")
    public ResultTableColumnHeader[] columnHeaders;
    public QueryResponse withColumnHeaders(ResultTableColumnHeader[] columnHeaders) {
        this.columnHeaders = columnHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Errors errors;
    public QueryResponse withErrors(Errors errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public QueryResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public Object[][] rows;
    public QueryResponse withRows(Object[][] rows) {
        this.rows = rows;
        return this;
    }
}