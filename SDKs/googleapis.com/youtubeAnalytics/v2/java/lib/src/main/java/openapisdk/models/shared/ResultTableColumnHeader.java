package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResultTableColumnHeader
 * The description of a column of the result table.
**/
public class ResultTableColumnHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnType")
    public String columnType;
    public ResultTableColumnHeader withColumnType(String columnType) {
        this.columnType = columnType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public String dataType;
    public ResultTableColumnHeader withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ResultTableColumnHeader withName(String name) {
        this.name = name;
        return this;
    }
}