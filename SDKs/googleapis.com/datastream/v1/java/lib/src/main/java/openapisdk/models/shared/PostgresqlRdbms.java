package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostgresqlRdbms
 * PostgreSQL database structure.
**/
public class PostgresqlRdbms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postgresqlSchemas")
    public PostgresqlSchema[] postgresqlSchemas;
    public PostgresqlRdbms withPostgresqlSchemas(PostgresqlSchema[] postgresqlSchemas) {
        this.postgresqlSchemas = postgresqlSchemas;
        return this;
    }
}