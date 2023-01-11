package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TextToImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=animation")
    public String animation;
    public TextToImageQueryParams withAnimation(String animation) {
        this.animation = animation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=author")
    public String author;
    public TextToImageQueryParams withAuthor(String author) {
        this.author = author;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorFont")
    public String authorFont;
    public TextToImageQueryParams withAuthorFont(String authorFont) {
        this.authorFont = authorFont;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorFontColor")
    public String authorFontColor;
    public TextToImageQueryParams withAuthorFontColor(String authorFontColor) {
        this.authorFontColor = authorFontColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=backgroundColor")
    public String backgroundColor;
    public TextToImageQueryParams withBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bgType")
    public String bgType;
    public TextToImageQueryParams withBgType(String bgType) {
        this.bgType = bgType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=brandLogo")
    public String brandLogo;
    public TextToImageQueryParams withBrandLogo(String brandLogo) {
        this.brandLogo = brandLogo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=enableHighlight")
    public Long enableHighlight;
    public TextToImageQueryParams withEnableHighlight(Long enableHighlight) {
        this.enableHighlight = enableHighlight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fontSize")
    public Long fontSize;
    public TextToImageQueryParams withFontSize(Long fontSize) {
        this.fontSize = fontSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gradientColor1")
    public String gradientColor1;
    public TextToImageQueryParams withGradientColor1(String gradientColor1) {
        this.gradientColor1 = gradientColor1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gradientColor2")
    public String gradientColor2;
    public TextToImageQueryParams withGradientColor2(String gradientColor2) {
        this.gradientColor2 = gradientColor2;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gradientType")
    public String gradientType;
    public TextToImageQueryParams withGradientType(String gradientType) {
        this.gradientType = gradientType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=highlightColor")
    public String highlightColor;
    public TextToImageQueryParams withHighlightColor(String highlightColor) {
        this.highlightColor = highlightColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quote")
    public String quote;
    public TextToImageQueryParams withQuote(String quote) {
        this.quote = quote;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quoteFont")
    public String quoteFont;
    public TextToImageQueryParams withQuoteFont(String quoteFont) {
        this.quoteFont = quoteFont;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=quoteFontColor")
    public String quoteFontColor;
    public TextToImageQueryParams withQuoteFontColor(String quoteFontColor) {
        this.quoteFontColor = quoteFontColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=showQuoteMark")
    public Long showQuoteMark;
    public TextToImageQueryParams withShowQuoteMark(Long showQuoteMark) {
        this.showQuoteMark = showQuoteMark;
        return this;
    }
}