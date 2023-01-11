package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Row
 * A single row in a table.
**/
public class Row {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Row withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Row withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Row withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public java.util.Map<String, Object> values;
    public Row withValues(java.util.Map<String, Object> values) {
        this.values = values;
        return this;
    }
}