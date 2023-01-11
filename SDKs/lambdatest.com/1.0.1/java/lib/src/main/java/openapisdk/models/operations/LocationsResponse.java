package openapisdk.models.operations;



public class LocationsResponse {
    public Object accessDenied;
    public LocationsResponse withAccessDenied(Object accessDenied) {
        this.accessDenied = accessDenied;
        return this;
    }
    public String contentType;
    public LocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Locations locations;
    public LocationsResponse withLocations(openapisdk.models.shared.Locations locations) {
        this.locations = locations;
        return this;
    }
}