package openapisdk.models.operations;



public class DfareportingConnectionTypesGetResponse {
    public openapisdk.models.shared.ConnectionType connectionType;
    public DfareportingConnectionTypesGetResponse withConnectionType(openapisdk.models.shared.ConnectionType connectionType) {
        this.connectionType = connectionType;
        return this;
    }
    public String contentType;
    public DfareportingConnectionTypesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingConnectionTypesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}