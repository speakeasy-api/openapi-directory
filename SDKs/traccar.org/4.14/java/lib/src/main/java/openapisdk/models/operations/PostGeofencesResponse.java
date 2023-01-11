package openapisdk.models.operations;



public class PostGeofencesResponse {
    public String contentType;
    public PostGeofencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Geofence geofence;
    public PostGeofencesResponse withGeofence(openapisdk.models.shared.Geofence geofence) {
        this.geofence = geofence;
        return this;
    }
    public Long statusCode;
    public PostGeofencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}