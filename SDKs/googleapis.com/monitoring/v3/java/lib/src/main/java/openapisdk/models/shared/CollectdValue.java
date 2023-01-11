package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CollectdValue
 * A single data point from a collectd-based plugin.
**/
public class CollectdValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceName")
    public String dataSourceName;
    public CollectdValue withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceType")
    public CollectdValueDataSourceTypeEnum dataSourceType;
    public CollectdValue withDataSourceType(CollectdValueDataSourceTypeEnum dataSourceType) {
        this.dataSourceType = dataSourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public TypedValue value;
    public CollectdValue withValue(TypedValue value) {
        this.value = value;
        return this;
    }
}