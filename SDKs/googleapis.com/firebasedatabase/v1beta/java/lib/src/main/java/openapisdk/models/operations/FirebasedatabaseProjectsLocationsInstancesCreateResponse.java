package openapisdk.models.operations;



public class FirebasedatabaseProjectsLocationsInstancesCreateResponse {
    public String contentType;
    public FirebasedatabaseProjectsLocationsInstancesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatabaseInstance databaseInstance;
    public FirebasedatabaseProjectsLocationsInstancesCreateResponse withDatabaseInstance(openapisdk.models.shared.DatabaseInstance databaseInstance) {
        this.databaseInstance = databaseInstance;
        return this;
    }
    public Long statusCode;
    public FirebasedatabaseProjectsLocationsInstancesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}