package openapisdk.models.operations;



public class DatafusionProjectsLocationsInstancesPatchResponse {
    public String contentType;
    public DatafusionProjectsLocationsInstancesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Operation operation;
    public DatafusionProjectsLocationsInstancesPatchResponse withOperation(openapisdk.models.shared.Operation operation) {
        this.operation = operation;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsInstancesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}