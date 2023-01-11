package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BandingProperties
 * Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set.
**/
public class BandingProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstBandColor")
    public Color firstBandColor;
    public BandingProperties withFirstBandColor(Color firstBandColor) {
        this.firstBandColor = firstBandColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstBandColorStyle")
    public ColorStyle firstBandColorStyle;
    public BandingProperties withFirstBandColorStyle(ColorStyle firstBandColorStyle) {
        this.firstBandColorStyle = firstBandColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("footerColor")
    public Color footerColor;
    public BandingProperties withFooterColor(Color footerColor) {
        this.footerColor = footerColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("footerColorStyle")
    public ColorStyle footerColorStyle;
    public BandingProperties withFooterColorStyle(ColorStyle footerColorStyle) {
        this.footerColorStyle = footerColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerColor")
    public Color headerColor;
    public BandingProperties withHeaderColor(Color headerColor) {
        this.headerColor = headerColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headerColorStyle")
    public ColorStyle headerColorStyle;
    public BandingProperties withHeaderColorStyle(ColorStyle headerColorStyle) {
        this.headerColorStyle = headerColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondBandColor")
    public Color secondBandColor;
    public BandingProperties withSecondBandColor(Color secondBandColor) {
        this.secondBandColor = secondBandColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondBandColorStyle")
    public ColorStyle secondBandColorStyle;
    public BandingProperties withSecondBandColorStyle(ColorStyle secondBandColorStyle) {
        this.secondBandColorStyle = secondBandColorStyle;
        return this;
    }
}