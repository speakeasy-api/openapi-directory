package openapisdk.models.operations;



public class DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse {
    public openapisdk.models.shared.BulkEditAssignedLocationsResponse bulkEditAssignedLocationsResponse;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse withBulkEditAssignedLocationsResponse(openapisdk.models.shared.BulkEditAssignedLocationsResponse bulkEditAssignedLocationsResponse) {
        this.bulkEditAssignedLocationsResponse = bulkEditAssignedLocationsResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}