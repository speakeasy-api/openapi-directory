package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MysqlColumn
 * MySQL Column.
**/
public class MysqlColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collation")
    public String collation;
    public MysqlColumn withCollation(String collation) {
        this.collation = collation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("column")
    public String column;
    public MysqlColumn withColumn(String column) {
        this.column = column;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public String dataType;
    public MysqlColumn withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Integer length;
    public MysqlColumn withLength(Integer length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nullable")
    public Boolean nullable;
    public MysqlColumn withNullable(Boolean nullable) {
        this.nullable = nullable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ordinalPosition")
    public Integer ordinalPosition;
    public MysqlColumn withOrdinalPosition(Integer ordinalPosition) {
        this.ordinalPosition = ordinalPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryKey")
    public Boolean primaryKey;
    public MysqlColumn withPrimaryKey(Boolean primaryKey) {
        this.primaryKey = primaryKey;
        return this;
    }
}