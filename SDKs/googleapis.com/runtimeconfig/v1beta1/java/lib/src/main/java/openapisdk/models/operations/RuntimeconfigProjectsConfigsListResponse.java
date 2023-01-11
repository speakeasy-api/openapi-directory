package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsListResponse {
    public String contentType;
    public RuntimeconfigProjectsConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConfigsResponse listConfigsResponse;
    public RuntimeconfigProjectsConfigsListResponse withListConfigsResponse(openapisdk.models.shared.ListConfigsResponse listConfigsResponse) {
        this.listConfigsResponse = listConfigsResponse;
        return this;
    }
    public Long statusCode;
    public RuntimeconfigProjectsConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}