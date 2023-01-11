package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutQuoteImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bg_color")
    public String bgColor;
    public PutQuoteImageQueryParams withBgColor(String bgColor) {
        this.bgColor = bgColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bgimage_id")
    public String bgimageId;
    public PutQuoteImageQueryParams withBgimageId(String bgimageId) {
        this.bgimageId = bgimageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=branding")
    public Boolean branding;
    public PutQuoteImageQueryParams withBranding(Boolean branding) {
        this.branding = branding;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=font_id")
    public String fontId;
    public PutQuoteImageQueryParams withFontId(String fontId) {
        this.fontId = fontId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=halign")
    public String halign;
    public PutQuoteImageQueryParams withHalign(String halign) {
        this.halign = halign;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=height")
    public Long height;
    public PutQuoteImageQueryParams withHeight(Long height) {
        this.height = height;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_transparent_layer")
    public Boolean includeTransparentLayer;
    public PutQuoteImageQueryParams withIncludeTransparentLayer(Boolean includeTransparentLayer) {
        this.includeTransparentLayer = includeTransparentLayer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quote_id")
    public String quoteId;
    public PutQuoteImageQueryParams withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text_color")
    public String textColor;
    public PutQuoteImageQueryParams withTextColor(String textColor) {
        this.textColor = textColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text_size")
    public String textSize;
    public PutQuoteImageQueryParams withTextSize(String textSize) {
        this.textSize = textSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=valign")
    public String valign;
    public PutQuoteImageQueryParams withValign(String valign) {
        this.valign = valign;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=width")
    public Long width;
    public PutQuoteImageQueryParams withWidth(Long width) {
        this.width = width;
        return this;
    }
}