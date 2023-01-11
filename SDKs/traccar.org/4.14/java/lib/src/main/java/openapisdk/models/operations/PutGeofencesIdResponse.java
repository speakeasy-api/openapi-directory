package openapisdk.models.operations;



public class PutGeofencesIdResponse {
    public String contentType;
    public PutGeofencesIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Geofence geofence;
    public PutGeofencesIdResponse withGeofence(openapisdk.models.shared.Geofence geofence) {
        this.geofence = geofence;
        return this;
    }
    public Long statusCode;
    public PutGeofencesIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}