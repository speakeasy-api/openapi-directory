package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateBy
 * The specification of which data to aggregate.
**/
public class AggregateBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public AggregateBy withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataTypeName")
    public String dataTypeName;
    public AggregateBy withDataTypeName(String dataTypeName) {
        this.dataTypeName = dataTypeName;
        return this;
    }
}