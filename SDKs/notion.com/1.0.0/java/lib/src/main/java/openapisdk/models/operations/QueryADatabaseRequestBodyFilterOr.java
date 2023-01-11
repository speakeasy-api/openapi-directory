package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabaseRequestBodyFilterOr {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("property")
    public String property;
    public QueryADatabaseRequestBodyFilterOr withProperty(String property) {
        this.property = property;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public QueryADatabaseRequestBodyFilterOrSelect select;
    public QueryADatabaseRequestBodyFilterOr withSelect(QueryADatabaseRequestBodyFilterOrSelect select) {
        this.select = select;
        return this;
    }
}