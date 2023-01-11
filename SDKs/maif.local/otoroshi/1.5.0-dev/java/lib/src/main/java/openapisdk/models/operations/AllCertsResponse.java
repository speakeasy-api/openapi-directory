package openapisdk.models.operations;



public class AllCertsResponse {
    public openapisdk.models.shared.Certificate[] certificates;
    public AllCertsResponse withCertificates(openapisdk.models.shared.Certificate[] certificates) {
        this.certificates = certificates;
        return this;
    }
    public String contentType;
    public AllCertsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AllCertsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}