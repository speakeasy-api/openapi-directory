package openapisdk.models.operations;



public class DfareportingConnectionTypesListResponse {
    public openapisdk.models.shared.ConnectionTypesListResponse connectionTypesListResponse;
    public DfareportingConnectionTypesListResponse withConnectionTypesListResponse(openapisdk.models.shared.ConnectionTypesListResponse connectionTypesListResponse) {
        this.connectionTypesListResponse = connectionTypesListResponse;
        return this;
    }
    public String contentType;
    public DfareportingConnectionTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingConnectionTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}