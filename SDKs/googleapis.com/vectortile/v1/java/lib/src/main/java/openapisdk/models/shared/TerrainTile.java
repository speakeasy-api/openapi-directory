package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TerrainTile
 * A tile containing information about the terrain located in the region it covers.
**/
public class TerrainTile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinates")
    public TileCoordinates coordinates;
    public TerrainTile withCoordinates(TileCoordinates coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstDerivative")
    public FirstDerivativeElevationGrid firstDerivative;
    public TerrainTile withFirstDerivative(FirstDerivativeElevationGrid firstDerivative) {
        this.firstDerivative = firstDerivative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TerrainTile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondDerivative")
    public SecondDerivativeElevationGrid secondDerivative;
    public TerrainTile withSecondDerivative(SecondDerivativeElevationGrid secondDerivative) {
        this.secondDerivative = secondDerivative;
        return this;
    }
}