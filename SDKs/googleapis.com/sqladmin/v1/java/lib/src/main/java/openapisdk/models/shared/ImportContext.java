package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportContext
 * Database instance import context.
**/
public class ImportContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bakImportOptions")
    public ImportContextBakImportOptions bakImportOptions;
    public ImportContext withBakImportOptions(ImportContextBakImportOptions bakImportOptions) {
        this.bakImportOptions = bakImportOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csvImportOptions")
    public ImportContextCsvImportOptions csvImportOptions;
    public ImportContext withCsvImportOptions(ImportContextCsvImportOptions csvImportOptions) {
        this.csvImportOptions = csvImportOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database")
    public String database;
    public ImportContext withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public ImportContextFileTypeEnum fileType;
    public ImportContext withFileType(ImportContextFileTypeEnum fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importUser")
    public String importUser;
    public ImportContext withImportUser(String importUser) {
        this.importUser = importUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ImportContext withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ImportContext withUri(String uri) {
        this.uri = uri;
        return this;
    }
}