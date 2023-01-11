package openapisdk.models.shared;



/**
 * Location
 * Location
**/
public class Location {
    public Double latitude;
    public Location withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    public Double longitude;
    public Location withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}