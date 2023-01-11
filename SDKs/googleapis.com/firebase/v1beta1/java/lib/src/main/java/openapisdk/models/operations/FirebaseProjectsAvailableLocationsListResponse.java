package openapisdk.models.operations;



public class FirebaseProjectsAvailableLocationsListResponse {
    public String contentType;
    public FirebaseProjectsAvailableLocationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAvailableLocationsResponse listAvailableLocationsResponse;
    public FirebaseProjectsAvailableLocationsListResponse withListAvailableLocationsResponse(openapisdk.models.shared.ListAvailableLocationsResponse listAvailableLocationsResponse) {
        this.listAvailableLocationsResponse = listAvailableLocationsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseProjectsAvailableLocationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}