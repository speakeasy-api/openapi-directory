package openapisdk.models.operations;



public class CertificatemanagerProjectsLocationsOperationsListResponse {
    public String contentType;
    public CertificatemanagerProjectsLocationsOperationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListOperationsResponse listOperationsResponse;
    public CertificatemanagerProjectsLocationsOperationsListResponse withListOperationsResponse(openapisdk.models.shared.ListOperationsResponse listOperationsResponse) {
        this.listOperationsResponse = listOperationsResponse;
        return this;
    }
    public Long statusCode;
    public CertificatemanagerProjectsLocationsOperationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}