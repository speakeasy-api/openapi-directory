package openapisdk.models.operations;



public class AppengineAppsAuthorizedCertificatesGetResponse {
    public openapisdk.models.shared.AuthorizedCertificate authorizedCertificate;
    public AppengineAppsAuthorizedCertificatesGetResponse withAuthorizedCertificate(openapisdk.models.shared.AuthorizedCertificate authorizedCertificate) {
        this.authorizedCertificate = authorizedCertificate;
        return this;
    }
    public String contentType;
    public AppengineAppsAuthorizedCertificatesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppengineAppsAuthorizedCertificatesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}