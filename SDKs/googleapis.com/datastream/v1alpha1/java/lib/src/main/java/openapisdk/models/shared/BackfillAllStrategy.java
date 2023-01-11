package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackfillAllStrategy
 * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
**/
public class BackfillAllStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlExcludedObjects")
    public MysqlRdbms mysqlExcludedObjects;
    public BackfillAllStrategy withMysqlExcludedObjects(MysqlRdbms mysqlExcludedObjects) {
        this.mysqlExcludedObjects = mysqlExcludedObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleExcludedObjects")
    public OracleRdbms oracleExcludedObjects;
    public BackfillAllStrategy withOracleExcludedObjects(OracleRdbms oracleExcludedObjects) {
        this.oracleExcludedObjects = oracleExcludedObjects;
        return this;
    }
}