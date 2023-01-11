package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostgresqlColumn
 * PostgreSQL Column.
**/
public class PostgresqlColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("column")
    public String column;
    public PostgresqlColumn withColumn(String column) {
        this.column = column;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public String dataType;
    public PostgresqlColumn withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Integer length;
    public PostgresqlColumn withLength(Integer length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nullable")
    public Boolean nullable;
    public PostgresqlColumn withNullable(Boolean nullable) {
        this.nullable = nullable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ordinalPosition")
    public Integer ordinalPosition;
    public PostgresqlColumn withOrdinalPosition(Integer ordinalPosition) {
        this.ordinalPosition = ordinalPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("precision")
    public Integer precision;
    public PostgresqlColumn withPrecision(Integer precision) {
        this.precision = precision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryKey")
    public Boolean primaryKey;
    public PostgresqlColumn withPrimaryKey(Boolean primaryKey) {
        this.primaryKey = primaryKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scale")
    public Integer scale;
    public PostgresqlColumn withScale(Integer scale) {
        this.scale = scale;
        return this;
    }
}