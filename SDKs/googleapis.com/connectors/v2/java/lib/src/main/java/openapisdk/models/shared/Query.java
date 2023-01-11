package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Query
 * A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`.
**/
public class Query {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public Query withQuery(String query) {
        this.query = query;
        return this;
    }
}