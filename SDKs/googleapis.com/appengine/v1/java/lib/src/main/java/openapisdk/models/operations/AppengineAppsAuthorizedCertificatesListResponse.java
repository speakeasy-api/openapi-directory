package openapisdk.models.operations;



public class AppengineAppsAuthorizedCertificatesListResponse {
    public String contentType;
    public AppengineAppsAuthorizedCertificatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAuthorizedCertificatesResponse listAuthorizedCertificatesResponse;
    public AppengineAppsAuthorizedCertificatesListResponse withListAuthorizedCertificatesResponse(openapisdk.models.shared.ListAuthorizedCertificatesResponse listAuthorizedCertificatesResponse) {
        this.listAuthorizedCertificatesResponse = listAuthorizedCertificatesResponse;
        return this;
    }
    public Long statusCode;
    public AppengineAppsAuthorizedCertificatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}