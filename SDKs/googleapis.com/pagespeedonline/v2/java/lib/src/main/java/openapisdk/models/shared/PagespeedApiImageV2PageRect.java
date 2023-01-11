package openapisdk.models.shared;



/**
 * PagespeedApiImageV2PageRect
 * The region of the page that is captured by this image, with dimensions measured in CSS pixels.
**/
public class PagespeedApiImageV2PageRect {
    public Integer height;
    public PagespeedApiImageV2PageRect withHeight(Integer height) {
        this.height = height;
        return this;
    }
    public Integer left;
    public PagespeedApiImageV2PageRect withLeft(Integer left) {
        this.left = left;
        return this;
    }
    public Integer top;
    public PagespeedApiImageV2PageRect withTop(Integer top) {
        this.top = top;
        return this;
    }
    public Integer width;
    public PagespeedApiImageV2PageRect withWidth(Integer width) {
        this.width = width;
        return this;
    }
}