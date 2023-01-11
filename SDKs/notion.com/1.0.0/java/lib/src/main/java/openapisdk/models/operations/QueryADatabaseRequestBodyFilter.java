package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabaseRequestBodyFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("or")
    public QueryADatabaseRequestBodyFilterOr[] or;
    public QueryADatabaseRequestBodyFilter withOr(QueryADatabaseRequestBodyFilterOr[] or) {
        this.or = or;
        return this;
    }
}