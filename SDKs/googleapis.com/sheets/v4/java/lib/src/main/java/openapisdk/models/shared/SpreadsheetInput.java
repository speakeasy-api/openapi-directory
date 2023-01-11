package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpreadsheetInput
 * Resource that represents a spreadsheet.
**/
public class SpreadsheetInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSources")
    public DataSource[] dataSources;
    public SpreadsheetInput withDataSources(DataSource[] dataSources) {
        this.dataSources = dataSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMetadata")
    public DeveloperMetadata[] developerMetadata;
    public SpreadsheetInput withDeveloperMetadata(DeveloperMetadata[] developerMetadata) {
        this.developerMetadata = developerMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedRanges")
    public NamedRange[] namedRanges;
    public SpreadsheetInput withNamedRanges(NamedRange[] namedRanges) {
        this.namedRanges = namedRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public SpreadsheetProperties properties;
    public SpreadsheetInput withProperties(SpreadsheetProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheets")
    public Sheet[] sheets;
    public SpreadsheetInput withSheets(Sheet[] sheets) {
        this.sheets = sheets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public SpreadsheetInput withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetUrl")
    public String spreadsheetUrl;
    public SpreadsheetInput withSpreadsheetUrl(String spreadsheetUrl) {
        this.spreadsheetUrl = spreadsheetUrl;
        return this;
    }
}