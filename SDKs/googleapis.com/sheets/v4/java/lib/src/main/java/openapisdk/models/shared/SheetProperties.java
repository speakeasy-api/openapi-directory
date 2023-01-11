package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SheetProperties
 * Properties of a sheet.
**/
public class SheetProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceSheetProperties")
    public DataSourceSheetProperties dataSourceSheetProperties;
    public SheetProperties withDataSourceSheetProperties(DataSourceSheetProperties dataSourceSheetProperties) {
        this.dataSourceSheetProperties = dataSourceSheetProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gridProperties")
    public GridProperties gridProperties;
    public SheetProperties withGridProperties(GridProperties gridProperties) {
        this.gridProperties = gridProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public SheetProperties withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public SheetProperties withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rightToLeft")
    public Boolean rightToLeft;
    public SheetProperties withRightToLeft(Boolean rightToLeft) {
        this.rightToLeft = rightToLeft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public SheetProperties withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetType")
    public SheetPropertiesSheetTypeEnum sheetType;
    public SheetProperties withSheetType(SheetPropertiesSheetTypeEnum sheetType) {
        this.sheetType = sheetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tabColor")
    public Color tabColor;
    public SheetProperties withTabColor(Color tabColor) {
        this.tabColor = tabColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tabColorStyle")
    public ColorStyle tabColorStyle;
    public SheetProperties withTabColorStyle(ColorStyle tabColorStyle) {
        this.tabColorStyle = tabColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SheetProperties withTitle(String title) {
        this.title = title;
        return this;
    }
}