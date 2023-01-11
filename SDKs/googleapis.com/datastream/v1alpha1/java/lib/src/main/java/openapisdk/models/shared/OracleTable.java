package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OracleTable
 * Oracle table.
**/
public class OracleTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleColumns")
    public OracleColumn[] oracleColumns;
    public OracleTable withOracleColumns(OracleColumn[] oracleColumns) {
        this.oracleColumns = oracleColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableName")
    public String tableName;
    public OracleTable withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}