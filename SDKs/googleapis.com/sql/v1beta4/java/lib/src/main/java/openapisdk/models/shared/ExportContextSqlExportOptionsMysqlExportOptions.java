package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportContextSqlExportOptionsMysqlExportOptions
 * Options for exporting from MySQL.
**/
public class ExportContextSqlExportOptionsMysqlExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterData")
    public Integer masterData;
    public ExportContextSqlExportOptionsMysqlExportOptions withMasterData(Integer masterData) {
        this.masterData = masterData;
        return this;
    }
}