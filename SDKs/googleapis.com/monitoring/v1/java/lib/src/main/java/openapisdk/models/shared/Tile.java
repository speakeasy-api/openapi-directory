package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Tile
 * A single tile in the mosaic. The placement and size of the tile are configurable.
**/
public class Tile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Integer height;
    public Tile withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("widget")
    public Widget widget;
    public Tile withWidget(Widget widget) {
        this.widget = widget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Integer width;
    public Tile withWidth(Integer width) {
        this.width = width;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xPos")
    public Integer xPos;
    public Tile withXPos(Integer xPos) {
        this.xPos = xPos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yPos")
    public Integer yPos;
    public Tile withYPos(Integer yPos) {
        this.yPos = yPos;
        return this;
    }
}