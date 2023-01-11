package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MysqlRdbms
 * MySQL database structure
**/
public class MysqlRdbms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlDatabases")
    public MysqlDatabase[] mysqlDatabases;
    public MysqlRdbms withMysqlDatabases(MysqlDatabase[] mysqlDatabases) {
        this.mysqlDatabases = mysqlDatabases;
        return this;
    }
}