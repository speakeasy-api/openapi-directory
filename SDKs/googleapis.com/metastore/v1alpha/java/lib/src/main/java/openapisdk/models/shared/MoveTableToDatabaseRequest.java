package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MoveTableToDatabaseRequest
 * Request message for DataprocMetastore.MoveTableToDatabase.
**/
public class MoveTableToDatabaseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dbName")
    public String dbName;
    public MoveTableToDatabaseRequest withDbName(String dbName) {
        this.dbName = dbName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationDbName")
    public String destinationDbName;
    public MoveTableToDatabaseRequest withDestinationDbName(String destinationDbName) {
        this.destinationDbName = destinationDbName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableName")
    public String tableName;
    public MoveTableToDatabaseRequest withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}