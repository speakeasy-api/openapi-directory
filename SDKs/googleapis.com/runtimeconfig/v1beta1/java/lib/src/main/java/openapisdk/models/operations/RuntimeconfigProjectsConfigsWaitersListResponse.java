package openapisdk.models.operations;



public class RuntimeconfigProjectsConfigsWaitersListResponse {
    public String contentType;
    public RuntimeconfigProjectsConfigsWaitersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListWaitersResponse listWaitersResponse;
    public RuntimeconfigProjectsConfigsWaitersListResponse withListWaitersResponse(openapisdk.models.shared.ListWaitersResponse listWaitersResponse) {
        this.listWaitersResponse = listWaitersResponse;
        return this;
    }
    public Long statusCode;
    public RuntimeconfigProjectsConfigsWaitersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}