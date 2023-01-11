package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabaseRequestBodySorts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public QueryADatabaseRequestBodySorts withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public String property;
    public QueryADatabaseRequestBodySorts withProperty(String property) {
        this.property = property;
        return this;
    }
}