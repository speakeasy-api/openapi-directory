package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MysqlDatabase
 * MySQL database.
**/
public class MysqlDatabase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseName")
    public String databaseName;
    public MysqlDatabase withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlTables")
    public MysqlTable[] mysqlTables;
    public MysqlDatabase withMysqlTables(MysqlTable[] mysqlTables) {
        this.mysqlTables = mysqlTables;
        return this;
    }
}