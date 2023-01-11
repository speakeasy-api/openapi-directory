package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportContext
 * Database instance export context.
**/
public class ExportContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bakExportOptions")
    public ExportContextBakExportOptions bakExportOptions;
    public ExportContext withBakExportOptions(ExportContextBakExportOptions bakExportOptions) {
        this.bakExportOptions = bakExportOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csvExportOptions")
    public ExportContextCsvExportOptions csvExportOptions;
    public ExportContext withCsvExportOptions(ExportContextCsvExportOptions csvExportOptions) {
        this.csvExportOptions = csvExportOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databases")
    public String[] databases;
    public ExportContext withDatabases(String[] databases) {
        this.databases = databases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public ExportContextFileTypeEnum fileType;
    public ExportContext withFileType(ExportContextFileTypeEnum fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ExportContext withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offload")
    public Boolean offload;
    public ExportContext withOffload(Boolean offload) {
        this.offload = offload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sqlExportOptions")
    public ExportContextSqlExportOptions sqlExportOptions;
    public ExportContext withSqlExportOptions(ExportContextSqlExportOptions sqlExportOptions) {
        this.sqlExportOptions = sqlExportOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ExportContext withUri(String uri) {
        this.uri = uri;
        return this;
    }
}