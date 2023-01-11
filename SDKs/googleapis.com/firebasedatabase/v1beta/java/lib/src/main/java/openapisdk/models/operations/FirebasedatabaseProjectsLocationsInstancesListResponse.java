package openapisdk.models.operations;



public class FirebasedatabaseProjectsLocationsInstancesListResponse {
    public String contentType;
    public FirebasedatabaseProjectsLocationsInstancesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDatabaseInstancesResponse listDatabaseInstancesResponse;
    public FirebasedatabaseProjectsLocationsInstancesListResponse withListDatabaseInstancesResponse(openapisdk.models.shared.ListDatabaseInstancesResponse listDatabaseInstancesResponse) {
        this.listDatabaseInstancesResponse = listDatabaseInstancesResponse;
        return this;
    }
    public Long statusCode;
    public FirebasedatabaseProjectsLocationsInstancesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}