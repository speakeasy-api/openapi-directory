package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation
 * Geographic Coordinates
**/
public class GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation {
    @JsonProperty("Latitude")
    public String latitude;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("Longitude")
    public String longitude;
    public GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonBranchGeographicLocation withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
}