package openapisdk.models.operations;



public class GetGeofencesResponse {
    public String contentType;
    public GetGeofencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Geofence[] geofences;
    public GetGeofencesResponse withGeofences(openapisdk.models.shared.Geofence[] geofences) {
        this.geofences = geofences;
        return this;
    }
    public Long statusCode;
    public GetGeofencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}