package openapisdk.models.operations;



public class CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse {
    public String contentType;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDnsAuthorizationsResponse listDnsAuthorizationsResponse;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse withListDnsAuthorizationsResponse(openapisdk.models.shared.ListDnsAuthorizationsResponse listDnsAuthorizationsResponse) {
        this.listDnsAuthorizationsResponse = listDnsAuthorizationsResponse;
        return this;
    }
    public Long statusCode;
    public CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}