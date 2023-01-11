package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportContextCsvImportOptions
 * Options for importing data as CSV.
**/
public class ImportContextCsvImportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public String[] columns;
    public ImportContextCsvImportOptions withColumns(String[] columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("escapeCharacter")
    public String escapeCharacter;
    public ImportContextCsvImportOptions withEscapeCharacter(String escapeCharacter) {
        this.escapeCharacter = escapeCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldsTerminatedBy")
    public String fieldsTerminatedBy;
    public ImportContextCsvImportOptions withFieldsTerminatedBy(String fieldsTerminatedBy) {
        this.fieldsTerminatedBy = fieldsTerminatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linesTerminatedBy")
    public String linesTerminatedBy;
    public ImportContextCsvImportOptions withLinesTerminatedBy(String linesTerminatedBy) {
        this.linesTerminatedBy = linesTerminatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quoteCharacter")
    public String quoteCharacter;
    public ImportContextCsvImportOptions withQuoteCharacter(String quoteCharacter) {
        this.quoteCharacter = quoteCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public String table;
    public ImportContextCsvImportOptions withTable(String table) {
        this.table = table;
        return this;
    }
}