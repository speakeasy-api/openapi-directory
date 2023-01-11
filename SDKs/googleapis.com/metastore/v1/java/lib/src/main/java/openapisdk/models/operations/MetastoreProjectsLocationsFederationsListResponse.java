package openapisdk.models.operations;



public class MetastoreProjectsLocationsFederationsListResponse {
    public String contentType;
    public MetastoreProjectsLocationsFederationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFederationsResponse listFederationsResponse;
    public MetastoreProjectsLocationsFederationsListResponse withListFederationsResponse(openapisdk.models.shared.ListFederationsResponse listFederationsResponse) {
        this.listFederationsResponse = listFederationsResponse;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsFederationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}