package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TileJson
 * TileJSON model.
 * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
**/
public class TileJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribution")
    public String attribution;
    public TileJson withAttribution(String attribution) {
        this.attribution = attribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bounds")
    public Double[] bounds;
    public TileJson withBounds(Double[] bounds) {
        this.bounds = bounds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String[] data;
    public TileJson withData(String[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TileJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grids")
    public String[] grids;
    public TileJson withGrids(String[] grids) {
        this.grids = grids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legend")
    public String legend;
    public TileJson withLegend(String legend) {
        this.legend = legend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxzoom")
    public Long maxzoom;
    public TileJson withMaxzoom(Long maxzoom) {
        this.maxzoom = maxzoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minzoom")
    public Long minzoom;
    public TileJson withMinzoom(Long minzoom) {
        this.minzoom = minzoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TileJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheme")
    public String scheme;
    public TileJson withScheme(String scheme) {
        this.scheme = scheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public TileJson withTemplate(String template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tilejson")
    public String tilejson;
    public TileJson withTilejson(String tilejson) {
        this.tilejson = tilejson;
        return this;
    }
    @JsonProperty("tiles")
    public String[] tiles;
    public TileJson withTiles(String[] tiles) {
        this.tiles = tiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public TileJson withVersion(String version) {
        this.version = version;
        return this;
    }
}