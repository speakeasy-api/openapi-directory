package openapisdk.models.operations;



public class CertificateActionRetrieveResponse {
    public Object[] arrayOfCertificateAction;
    public CertificateActionRetrieveResponse withArrayOfCertificateAction(Object[] arrayOfCertificateAction) {
        this.arrayOfCertificateAction = arrayOfCertificateAction;
        return this;
    }
    public String contentType;
    public CertificateActionRetrieveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CertificateActionRetrieveResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CertificateActionRetrieveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}