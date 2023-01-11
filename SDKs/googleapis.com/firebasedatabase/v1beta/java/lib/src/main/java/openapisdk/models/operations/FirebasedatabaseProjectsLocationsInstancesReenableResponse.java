package openapisdk.models.operations;



public class FirebasedatabaseProjectsLocationsInstancesReenableResponse {
    public String contentType;
    public FirebasedatabaseProjectsLocationsInstancesReenableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatabaseInstance databaseInstance;
    public FirebasedatabaseProjectsLocationsInstancesReenableResponse withDatabaseInstance(openapisdk.models.shared.DatabaseInstance databaseInstance) {
        this.databaseInstance = databaseInstance;
        return this;
    }
    public Long statusCode;
    public FirebasedatabaseProjectsLocationsInstancesReenableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}