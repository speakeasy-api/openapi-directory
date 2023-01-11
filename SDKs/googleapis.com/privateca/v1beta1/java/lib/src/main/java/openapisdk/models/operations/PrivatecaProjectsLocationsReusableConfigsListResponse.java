package openapisdk.models.operations;



public class PrivatecaProjectsLocationsReusableConfigsListResponse {
    public String contentType;
    public PrivatecaProjectsLocationsReusableConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReusableConfigsResponse listReusableConfigsResponse;
    public PrivatecaProjectsLocationsReusableConfigsListResponse withListReusableConfigsResponse(openapisdk.models.shared.ListReusableConfigsResponse listReusableConfigsResponse) {
        this.listReusableConfigsResponse = listReusableConfigsResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsReusableConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}