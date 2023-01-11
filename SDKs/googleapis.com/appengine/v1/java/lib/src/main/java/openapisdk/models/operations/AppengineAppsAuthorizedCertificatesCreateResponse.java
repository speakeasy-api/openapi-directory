package openapisdk.models.operations;



public class AppengineAppsAuthorizedCertificatesCreateResponse {
    public openapisdk.models.shared.AuthorizedCertificate authorizedCertificate;
    public AppengineAppsAuthorizedCertificatesCreateResponse withAuthorizedCertificate(openapisdk.models.shared.AuthorizedCertificate authorizedCertificate) {
        this.authorizedCertificate = authorizedCertificate;
        return this;
    }
    public String contentType;
    public AppengineAppsAuthorizedCertificatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppengineAppsAuthorizedCertificatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}