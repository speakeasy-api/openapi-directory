package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OracleRdbms
 * Oracle database structure.
**/
public class OracleRdbms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleSchemas")
    public OracleSchema[] oracleSchemas;
    public OracleRdbms withOracleSchemas(OracleSchema[] oracleSchemas) {
        this.oracleSchemas = oracleSchemas;
        return this;
    }
}