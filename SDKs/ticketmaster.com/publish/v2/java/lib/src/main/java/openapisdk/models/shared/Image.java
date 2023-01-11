package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Image
 * Image
**/
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribution")
    public String attribution;
    public Image withAttribution(String attribution) {
        this.attribution = attribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public String[] domains;
    public Image withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fallback")
    public Boolean fallback;
    public Image withFallback(Boolean fallback) {
        this.fallback = fallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public Image withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratio")
    public ImageRatioEnum ratio;
    public Image withRatio(ImageRatioEnum ratio) {
        this.ratio = ratio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Image withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public Image withWidth(Integer width) {
        this.width = width;
        return this;
    }
}