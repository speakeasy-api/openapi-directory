package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpreadsheetTheme
 * Represents spreadsheet theme
**/
public class SpreadsheetTheme {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryFontFamily")
    public String primaryFontFamily;
    public SpreadsheetTheme withPrimaryFontFamily(String primaryFontFamily) {
        this.primaryFontFamily = primaryFontFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("themeColors")
    public ThemeColorPair[] themeColors;
    public SpreadsheetTheme withThemeColors(ThemeColorPair[] themeColors) {
        this.themeColors = themeColors;
        return this;
    }
}