package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileImageMediaMetadataLocation
 * Geographic location information stored in the image.
**/
public class FileImageMediaMetadataLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("altitude")
    public Double altitude;
    public FileImageMediaMetadataLocation withAltitude(Double altitude) {
        this.altitude = altitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public FileImageMediaMetadataLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public FileImageMediaMetadataLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}