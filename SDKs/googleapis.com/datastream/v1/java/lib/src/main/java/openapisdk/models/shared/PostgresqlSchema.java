package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostgresqlSchema
 * PostgreSQL schema.
**/
public class PostgresqlSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postgresqlTables")
    public PostgresqlTable[] postgresqlTables;
    public PostgresqlSchema withPostgresqlTables(PostgresqlTable[] postgresqlTables) {
        this.postgresqlTables = postgresqlTables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public PostgresqlSchema withSchema(String schema) {
        this.schema = schema;
        return this;
    }
}