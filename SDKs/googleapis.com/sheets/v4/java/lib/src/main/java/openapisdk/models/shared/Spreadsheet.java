package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Spreadsheet
 * Resource that represents a spreadsheet.
**/
public class Spreadsheet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceSchedules")
    public DataSourceRefreshSchedule[] dataSourceSchedules;
    public Spreadsheet withDataSourceSchedules(DataSourceRefreshSchedule[] dataSourceSchedules) {
        this.dataSourceSchedules = dataSourceSchedules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSources")
    public DataSource[] dataSources;
    public Spreadsheet withDataSources(DataSource[] dataSources) {
        this.dataSources = dataSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerMetadata")
    public DeveloperMetadata[] developerMetadata;
    public Spreadsheet withDeveloperMetadata(DeveloperMetadata[] developerMetadata) {
        this.developerMetadata = developerMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namedRanges")
    public NamedRange[] namedRanges;
    public Spreadsheet withNamedRanges(NamedRange[] namedRanges) {
        this.namedRanges = namedRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public SpreadsheetProperties properties;
    public Spreadsheet withProperties(SpreadsheetProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheets")
    public Sheet[] sheets;
    public Spreadsheet withSheets(Sheet[] sheets) {
        this.sheets = sheets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public Spreadsheet withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetUrl")
    public String spreadsheetUrl;
    public Spreadsheet withSpreadsheetUrl(String spreadsheetUrl) {
        this.spreadsheetUrl = spreadsheetUrl;
        return this;
    }
}