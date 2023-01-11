package openapisdk.models.operations;



public class FirebasedatabaseProjectsLocationsInstancesDeleteResponse {
    public String contentType;
    public FirebasedatabaseProjectsLocationsInstancesDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatabaseInstance databaseInstance;
    public FirebasedatabaseProjectsLocationsInstancesDeleteResponse withDatabaseInstance(openapisdk.models.shared.DatabaseInstance databaseInstance) {
        this.databaseInstance = databaseInstance;
        return this;
    }
    public Long statusCode;
    public FirebasedatabaseProjectsLocationsInstancesDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}