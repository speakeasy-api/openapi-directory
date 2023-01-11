package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostgresqlSourceConfig
 * PostgreSQL data source configuration
**/
public class PostgresqlSourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeObjects")
    public PostgresqlRdbms excludeObjects;
    public PostgresqlSourceConfig withExcludeObjects(PostgresqlRdbms excludeObjects) {
        this.excludeObjects = excludeObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeObjects")
    public PostgresqlRdbms includeObjects;
    public PostgresqlSourceConfig withIncludeObjects(PostgresqlRdbms includeObjects) {
        this.includeObjects = includeObjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publication")
    public String publication;
    public PostgresqlSourceConfig withPublication(String publication) {
        this.publication = publication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationSlot")
    public String replicationSlot;
    public PostgresqlSourceConfig withReplicationSlot(String replicationSlot) {
        this.replicationSlot = replicationSlot;
        return this;
    }
}