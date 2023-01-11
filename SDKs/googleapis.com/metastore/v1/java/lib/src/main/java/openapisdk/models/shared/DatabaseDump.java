package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatabaseDump
 * A specification of the location of and metadata about a database dump from a relational database management system.
**/
public class DatabaseDump {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseType")
    public DatabaseDumpDatabaseTypeEnum databaseType;
    public DatabaseDump withDatabaseType(DatabaseDumpDatabaseTypeEnum databaseType) {
        this.databaseType = databaseType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsUri")
    public String gcsUri;
    public DatabaseDump withGcsUri(String gcsUri) {
        this.gcsUri = gcsUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceDatabase")
    public String sourceDatabase;
    public DatabaseDump withSourceDatabase(String sourceDatabase) {
        this.sourceDatabase = sourceDatabase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public DatabaseDumpTypeEnum type;
    public DatabaseDump withType(DatabaseDumpTypeEnum type) {
        this.type = type;
        return this;
    }
}