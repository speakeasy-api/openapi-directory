package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OracleSchema
 * Oracle schema.
**/
public class OracleSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleTables")
    public OracleTable[] oracleTables;
    public OracleSchema withOracleTables(OracleTable[] oracleTables) {
        this.oracleTables = oracleTables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public OracleSchema withSchema(String schema) {
        this.schema = schema;
        return this;
    }
}