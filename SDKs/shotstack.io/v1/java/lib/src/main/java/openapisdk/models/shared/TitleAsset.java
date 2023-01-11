package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TitleAsset
 * The TitleAsset clip type lets you create video titles from a text string and apply styling and positioning.
**/
public class TitleAsset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("background")
    public String background;
    public TitleAsset withBackground(String background) {
        this.background = background;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public TitleAsset withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Offset offset;
    public TitleAsset withOffset(Offset offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public TitleAssetPositionEnum position;
    public TitleAsset withPosition(TitleAssetPositionEnum position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public TitleAssetSizeEnum size;
    public TitleAsset withSize(TitleAssetSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("style")
    public TitleAssetStyleEnum style;
    public TitleAsset withStyle(TitleAssetStyleEnum style) {
        this.style = style;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public TitleAsset withText(String text) {
        this.text = text;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public TitleAsset withType(String type) {
        this.type = type;
        return this;
    }
}