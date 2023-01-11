package openapisdk.models.operations;



public class SecuritycenterProjectsSourcesListResponse {
    public String contentType;
    public SecuritycenterProjectsSourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSourcesResponse listSourcesResponse;
    public SecuritycenterProjectsSourcesListResponse withListSourcesResponse(openapisdk.models.shared.ListSourcesResponse listSourcesResponse) {
        this.listSourcesResponse = listSourcesResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsSourcesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}