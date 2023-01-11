package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourcesMediaIdSyndicateFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=autoplay")
    public Boolean autoplay;
    public GetResourcesMediaIdSyndicateFormatQueryParams withAutoplay(Boolean autoplay) {
        this.autoplay = autoplay;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=cssClass")
    public String cssClass;
    public GetResourcesMediaIdSyndicateFormatQueryParams withCssClass(String cssClass) {
        this.cssClass = cssClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=font-size")
    public Integer fontSize;
    public GetResourcesMediaIdSyndicateFormatQueryParams withFontSize(Integer fontSize) {
        this.fontSize = fontSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=imageFloat")
    public String imageFloat;
    public GetResourcesMediaIdSyndicateFormatQueryParams withImageFloat(String imageFloat) {
        this.imageFloat = imageFloat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=imageMargin")
    public String imageMargin;
    public GetResourcesMediaIdSyndicateFormatQueryParams withImageMargin(String imageMargin) {
        this.imageMargin = imageMargin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=rel")
    public Boolean rel;
    public GetResourcesMediaIdSyndicateFormatQueryParams withRel(Boolean rel) {
        this.rel = rel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=stripBreaks")
    public Boolean stripBreaks;
    public GetResourcesMediaIdSyndicateFormatQueryParams withStripBreaks(Boolean stripBreaks) {
        this.stripBreaks = stripBreaks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=stripClasses")
    public Boolean stripClasses;
    public GetResourcesMediaIdSyndicateFormatQueryParams withStripClasses(Boolean stripClasses) {
        this.stripClasses = stripClasses;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=stripImages")
    public Boolean stripImages;
    public GetResourcesMediaIdSyndicateFormatQueryParams withStripImages(Boolean stripImages) {
        this.stripImages = stripImages;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=stripScripts")
    public Boolean stripScripts;
    public GetResourcesMediaIdSyndicateFormatQueryParams withStripScripts(Boolean stripScripts) {
        this.stripScripts = stripScripts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=stripStyles")
    public Boolean stripStyles;
    public GetResourcesMediaIdSyndicateFormatQueryParams withStripStyles(Boolean stripStyles) {
        this.stripStyles = stripStyles;
        return this;
    }
}