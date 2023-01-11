package openapisdk.models.operations;



public class JobsProjectsTenantsListResponse {
    public String contentType;
    public JobsProjectsTenantsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTenantsResponse listTenantsResponse;
    public JobsProjectsTenantsListResponse withListTenantsResponse(openapisdk.models.shared.ListTenantsResponse listTenantsResponse) {
        this.listTenantsResponse = listTenantsResponse;
        return this;
    }
    public Long statusCode;
    public JobsProjectsTenantsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}