package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation
 * Geographic Coordinates
**/
public class GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation {
    @JsonProperty("Latitude")
    public String latitude;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("Longitude")
    public String longitude;
    public GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonAtmGeographicLocation withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
}