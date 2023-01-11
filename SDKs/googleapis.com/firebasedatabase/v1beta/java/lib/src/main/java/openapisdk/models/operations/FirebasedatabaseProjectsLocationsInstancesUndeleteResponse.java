package openapisdk.models.operations;



public class FirebasedatabaseProjectsLocationsInstancesUndeleteResponse {
    public String contentType;
    public FirebasedatabaseProjectsLocationsInstancesUndeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DatabaseInstance databaseInstance;
    public FirebasedatabaseProjectsLocationsInstancesUndeleteResponse withDatabaseInstance(openapisdk.models.shared.DatabaseInstance databaseInstance) {
        this.databaseInstance = databaseInstance;
        return this;
    }
    public Long statusCode;
    public FirebasedatabaseProjectsLocationsInstancesUndeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}