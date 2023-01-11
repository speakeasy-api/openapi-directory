package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostgresqlObjectIdentifier
 * PostgreSQL data source object identifier.
**/
public class PostgresqlObjectIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public PostgresqlObjectIdentifier withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public String table;
    public PostgresqlObjectIdentifier withTable(String table) {
        this.table = table;
        return this;
    }
}