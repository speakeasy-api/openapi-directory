package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HtmlAsset
 * The HtmlAsset clip type lets you create text based layout and formatting using HTML and CSS. You can also set the height and width of a bounding box for the HTML content to sit within. Text and elements will wrap within the bounding box.
**/
public class HtmlAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("background")
    public String background;
    public HtmlAsset withBackground(String background) {
        this.background = background;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("css")
    public String css;
    public HtmlAsset withCss(String css) {
        this.css = css;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public HtmlAsset withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonProperty("html")
    public String html;
    public HtmlAsset withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public HtmlAssetPositionEnum position;
    public HtmlAsset withPosition(HtmlAssetPositionEnum position) {
        this.position = position;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public HtmlAsset withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public HtmlAsset withWidth(Long width) {
        this.width = width;
        return this;
    }
}