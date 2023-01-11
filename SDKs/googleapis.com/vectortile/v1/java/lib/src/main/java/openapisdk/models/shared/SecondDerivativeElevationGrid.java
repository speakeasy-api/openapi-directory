package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecondDerivativeElevationGrid
 * A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs of the diffs between them as integers at some requested level of precision to take advantage of integer packing. Note that the data is packed in such a way that is fast to decode in Unity and that further optimizes wire size.
**/
public class SecondDerivativeElevationGrid {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("altitudeMultiplier")
    public Float altitudeMultiplier;
    public SecondDerivativeElevationGrid withAltitudeMultiplier(Float altitudeMultiplier) {
        this.altitudeMultiplier = altitudeMultiplier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnCount")
    public Integer columnCount;
    public SecondDerivativeElevationGrid withColumnCount(Integer columnCount) {
        this.columnCount = columnCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodedData")
    public String encodedData;
    public SecondDerivativeElevationGrid withEncodedData(String encodedData) {
        this.encodedData = encodedData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowCount")
    public Integer rowCount;
    public SecondDerivativeElevationGrid withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
}