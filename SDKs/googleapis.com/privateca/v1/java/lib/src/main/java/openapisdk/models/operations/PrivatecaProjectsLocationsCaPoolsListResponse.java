package openapisdk.models.operations;



public class PrivatecaProjectsLocationsCaPoolsListResponse {
    public String contentType;
    public PrivatecaProjectsLocationsCaPoolsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCaPoolsResponse listCaPoolsResponse;
    public PrivatecaProjectsLocationsCaPoolsListResponse withListCaPoolsResponse(openapisdk.models.shared.ListCaPoolsResponse listCaPoolsResponse) {
        this.listCaPoolsResponse = listCaPoolsResponse;
        return this;
    }
    public Long statusCode;
    public PrivatecaProjectsLocationsCaPoolsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}