package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Query {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Query")
    public QueryQuery query;
    public Query withQuery(QueryQuery query) {
        this.query = query;
        return this;
    }
}