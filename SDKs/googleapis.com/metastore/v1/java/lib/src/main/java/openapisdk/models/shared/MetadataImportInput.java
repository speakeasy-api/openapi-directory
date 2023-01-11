package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetadataImportInput
 * A metastore resource that imports metadata.
**/
public class MetadataImportInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseDump")
    public DatabaseDump databaseDump;
    public MetadataImportInput withDatabaseDump(DatabaseDump databaseDump) {
        this.databaseDump = databaseDump;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MetadataImportInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MetadataImportInput withName(String name) {
        this.name = name;
        return this;
    }
}