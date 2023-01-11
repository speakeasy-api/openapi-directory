package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MysqlTable
 * MySQL table.
**/
public class MysqlTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlColumns")
    public MysqlColumn[] mysqlColumns;
    public MysqlTable withMysqlColumns(MysqlColumn[] mysqlColumns) {
        this.mysqlColumns = mysqlColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public String table;
    public MysqlTable withTable(String table) {
        this.table = table;
        return this;
    }
}