package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MysqlObjectIdentifier
 * Mysql data source object identifier.
**/
public class MysqlObjectIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database")
    public String database;
    public MysqlObjectIdentifier withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public String table;
    public MysqlObjectIdentifier withTable(String table) {
        this.table = table;
        return this;
    }
}