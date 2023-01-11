package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportContextSqlExportOptions
 * Options for exporting data as SQL statements.
**/
public class ExportContextSqlExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlExportOptions")
    public ExportContextSqlExportOptionsMysqlExportOptions mysqlExportOptions;
    public ExportContextSqlExportOptions withMysqlExportOptions(ExportContextSqlExportOptionsMysqlExportOptions mysqlExportOptions) {
        this.mysqlExportOptions = mysqlExportOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaOnly")
    public Boolean schemaOnly;
    public ExportContextSqlExportOptions withSchemaOnly(Boolean schemaOnly) {
        this.schemaOnly = schemaOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tables")
    public String[] tables;
    public ExportContextSqlExportOptions withTables(String[] tables) {
        this.tables = tables;
        return this;
    }
}