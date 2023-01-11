package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeNativeAdAppIcon
 * The app icon, for app download ads.
**/
public class CreativeNativeAdAppIcon {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public CreativeNativeAdAppIcon withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CreativeNativeAdAppIcon withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public CreativeNativeAdAppIcon withWidth(Integer width) {
        this.width = width;
        return this;
    }
}