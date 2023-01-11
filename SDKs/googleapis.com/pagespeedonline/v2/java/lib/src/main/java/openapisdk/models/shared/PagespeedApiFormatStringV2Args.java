package openapisdk.models.shared;



public class PagespeedApiFormatStringV2Args {
    public String key;
    public PagespeedApiFormatStringV2Args withKey(String key) {
        this.key = key;
        return this;
    }
    public PagespeedApiFormatStringV2ArgsRects[] rects;
    public PagespeedApiFormatStringV2Args withRects(PagespeedApiFormatStringV2ArgsRects[] rects) {
        this.rects = rects;
        return this;
    }
    public PagespeedApiFormatStringV2ArgsSecondaryRects[] secondaryRects;
    public PagespeedApiFormatStringV2Args withSecondaryRects(PagespeedApiFormatStringV2ArgsSecondaryRects[] secondaryRects) {
        this.secondaryRects = secondaryRects;
        return this;
    }
    public String type;
    public PagespeedApiFormatStringV2Args withType(String type) {
        this.type = type;
        return this;
    }
    public String value;
    public PagespeedApiFormatStringV2Args withValue(String value) {
        this.value = value;
        return this;
    }
}