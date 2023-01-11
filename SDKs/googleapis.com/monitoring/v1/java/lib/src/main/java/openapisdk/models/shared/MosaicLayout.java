package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MosaicLayout
 * A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid.
**/
public class MosaicLayout {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columns")
    public Integer columns;
    public MosaicLayout withColumns(Integer columns) {
        this.columns = columns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiles")
    public Tile[] tiles;
    public MosaicLayout withTiles(Tile[] tiles) {
        this.tiles = tiles;
        return this;
    }
}