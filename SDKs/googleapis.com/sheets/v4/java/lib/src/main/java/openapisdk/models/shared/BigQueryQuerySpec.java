package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BigQueryQuerySpec
 * Specifies a custom BigQuery query.
**/
public class BigQueryQuerySpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawQuery")
    public String rawQuery;
    public BigQueryQuerySpec withRawQuery(String rawQuery) {
        this.rawQuery = rawQuery;
        return this;
    }
}