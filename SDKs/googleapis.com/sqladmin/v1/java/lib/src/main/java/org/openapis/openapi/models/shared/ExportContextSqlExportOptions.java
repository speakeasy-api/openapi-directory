/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExportContextSqlExportOptions - Options for exporting data as SQL statements.
 */
public class ExportContextSqlExportOptions {
    /**
     * Options for exporting from MySQL.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlExportOptions")
    public ExportContextSqlExportOptionsMysqlExportOptions mysqlExportOptions;

    public ExportContextSqlExportOptions withMysqlExportOptions(ExportContextSqlExportOptionsMysqlExportOptions mysqlExportOptions) {
        this.mysqlExportOptions = mysqlExportOptions;
        return this;
    }
    
    /**
     * Export only schemas.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaOnly")
    public Boolean schemaOnly;

    public ExportContextSqlExportOptions withSchemaOnly(Boolean schemaOnly) {
        this.schemaOnly = schemaOnly;
        return this;
    }
    
    /**
     * Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database. For PostgreSQL instances, you can specify only one table.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tables")
    public String[] tables;

    public ExportContextSqlExportOptions withTables(String[] tables) {
        this.tables = tables;
        return this;
    }
    
    public ExportContextSqlExportOptions(){}
}
