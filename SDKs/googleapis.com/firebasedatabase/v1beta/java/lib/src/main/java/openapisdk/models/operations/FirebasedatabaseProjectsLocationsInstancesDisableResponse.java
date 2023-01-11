package openapisdk.models.operations;



public class FirebasedatabaseProjectsLocationsInstancesDisableResponse {
    public String contentType;
    public FirebasedatabaseProjectsLocationsInstancesDisableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatabaseInstance databaseInstance;
    public FirebasedatabaseProjectsLocationsInstancesDisableResponse withDatabaseInstance(openapisdk.models.shared.DatabaseInstance databaseInstance) {
        this.databaseInstance = databaseInstance;
        return this;
    }
    public Long statusCode;
    public FirebasedatabaseProjectsLocationsInstancesDisableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}