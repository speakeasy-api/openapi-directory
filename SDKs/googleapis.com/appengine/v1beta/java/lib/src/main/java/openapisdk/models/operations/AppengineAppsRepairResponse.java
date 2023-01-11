package openapisdk.models.operations;



public class AppengineAppsRepairResponse {
    public String contentType;
    public AppengineAppsRepairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public AppengineAppsRepairResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public AppengineAppsRepairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}