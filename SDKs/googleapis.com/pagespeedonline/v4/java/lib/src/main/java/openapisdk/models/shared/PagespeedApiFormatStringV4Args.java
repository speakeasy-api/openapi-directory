package openapisdk.models.shared;



public class PagespeedApiFormatStringV4Args {
    public String key;
    public PagespeedApiFormatStringV4Args withKey(String key) {
        this.key = key;
        return this;
    }
    public PagespeedApiFormatStringV4ArgsRects[] rects;
    public PagespeedApiFormatStringV4Args withRects(PagespeedApiFormatStringV4ArgsRects[] rects) {
        this.rects = rects;
        return this;
    }
    public PagespeedApiFormatStringV4ArgsSecondaryRects[] secondaryRects;
    public PagespeedApiFormatStringV4Args withSecondaryRects(PagespeedApiFormatStringV4ArgsSecondaryRects[] secondaryRects) {
        this.secondaryRects = secondaryRects;
        return this;
    }
    public String type;
    public PagespeedApiFormatStringV4Args withType(String type) {
        this.type = type;
        return this;
    }
    public String value;
    public PagespeedApiFormatStringV4Args withValue(String value) {
        this.value = value;
        return this;
    }
}