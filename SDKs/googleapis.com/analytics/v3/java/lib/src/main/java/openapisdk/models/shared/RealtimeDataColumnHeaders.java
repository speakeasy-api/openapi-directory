package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RealtimeDataColumnHeaders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnType")
    public String columnType;
    public RealtimeDataColumnHeaders withColumnType(String columnType) {
        this.columnType = columnType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public String dataType;
    public RealtimeDataColumnHeaders withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RealtimeDataColumnHeaders withName(String name) {
        this.name = name;
        return this;
    }
}