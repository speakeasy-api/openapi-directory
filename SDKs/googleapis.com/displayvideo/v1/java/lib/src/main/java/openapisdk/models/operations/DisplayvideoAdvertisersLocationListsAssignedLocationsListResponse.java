package openapisdk.models.operations;



public class DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAssignedLocationsResponse listAssignedLocationsResponse;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse withListAssignedLocationsResponse(openapisdk.models.shared.ListAssignedLocationsResponse listAssignedLocationsResponse) {
        this.listAssignedLocationsResponse = listAssignedLocationsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}