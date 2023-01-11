package openapisdk.models.shared;



/**
 * Image
 * Image
**/
public class Image {
    public String attribution;
    public Image withAttribution(String attribution) {
        this.attribution = attribution;
        return this;
    }
    public Boolean fallback;
    public Image withFallback(Boolean fallback) {
        this.fallback = fallback;
        return this;
    }
    public Integer height;
    public Image withHeight(Integer height) {
        this.height = height;
        return this;
    }
    public ImageRatioEnum ratio;
    public Image withRatio(ImageRatioEnum ratio) {
        this.ratio = ratio;
        return this;
    }
    public String url;
    public Image withUrl(String url) {
        this.url = url;
        return this;
    }
    public Integer width;
    public Image withWidth(Integer width) {
        this.width = width;
        return this;
    }
}