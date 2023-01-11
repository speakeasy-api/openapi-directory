package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabaseRequestBodyFilterOrSelect {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equals")
    public String equals;
    public QueryADatabaseRequestBodyFilterOrSelect withEquals(String equals) {
        this.equals = equals;
        return this;
    }
}