package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpreadsheetProperties
 * Properties of a spreadsheet.
**/
public class SpreadsheetProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRecalc")
    public SpreadsheetPropertiesAutoRecalcEnum autoRecalc;
    public SpreadsheetProperties withAutoRecalc(SpreadsheetPropertiesAutoRecalcEnum autoRecalc) {
        this.autoRecalc = autoRecalc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultFormat")
    public CellFormat defaultFormat;
    public SpreadsheetProperties withDefaultFormat(CellFormat defaultFormat) {
        this.defaultFormat = defaultFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iterativeCalculationSettings")
    public IterativeCalculationSettings iterativeCalculationSettings;
    public SpreadsheetProperties withIterativeCalculationSettings(IterativeCalculationSettings iterativeCalculationSettings) {
        this.iterativeCalculationSettings = iterativeCalculationSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public SpreadsheetProperties withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetTheme")
    public SpreadsheetTheme spreadsheetTheme;
    public SpreadsheetProperties withSpreadsheetTheme(SpreadsheetTheme spreadsheetTheme) {
        this.spreadsheetTheme = spreadsheetTheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public SpreadsheetProperties withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SpreadsheetProperties withTitle(String title) {
        this.title = title;
        return this;
    }
}