package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportContextCsvExportOptions
 * Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.
**/
public class ExportContextCsvExportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("escapeCharacter")
    public String escapeCharacter;
    public ExportContextCsvExportOptions withEscapeCharacter(String escapeCharacter) {
        this.escapeCharacter = escapeCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldsTerminatedBy")
    public String fieldsTerminatedBy;
    public ExportContextCsvExportOptions withFieldsTerminatedBy(String fieldsTerminatedBy) {
        this.fieldsTerminatedBy = fieldsTerminatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linesTerminatedBy")
    public String linesTerminatedBy;
    public ExportContextCsvExportOptions withLinesTerminatedBy(String linesTerminatedBy) {
        this.linesTerminatedBy = linesTerminatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quoteCharacter")
    public String quoteCharacter;
    public ExportContextCsvExportOptions withQuoteCharacter(String quoteCharacter) {
        this.quoteCharacter = quoteCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectQuery")
    public String selectQuery;
    public ExportContextCsvExportOptions withSelectQuery(String selectQuery) {
        this.selectQuery = selectQuery;
        return this;
    }
}