package openapisdk.models.operations;



public class AppengineAppsAuthorizedCertificatesPatchResponse {
    public openapisdk.models.shared.AuthorizedCertificate authorizedCertificate;
    public AppengineAppsAuthorizedCertificatesPatchResponse withAuthorizedCertificate(openapisdk.models.shared.AuthorizedCertificate authorizedCertificate) {
        this.authorizedCertificate = authorizedCertificate;
        return this;
    }
    public String contentType;
    public AppengineAppsAuthorizedCertificatesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppengineAppsAuthorizedCertificatesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}