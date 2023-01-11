package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostgresqlTable
 * PostgreSQL table.
**/
public class PostgresqlTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postgresqlColumns")
    public PostgresqlColumn[] postgresqlColumns;
    public PostgresqlTable withPostgresqlColumns(PostgresqlColumn[] postgresqlColumns) {
        this.postgresqlColumns = postgresqlColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public String table;
    public PostgresqlTable withTable(String table) {
        this.table = table;
        return this;
    }
}