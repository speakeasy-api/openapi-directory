package openapisdk.models.operations;



public class RetrieveDetailsAboutSpecificAspspResponse {
    public openapisdk.models.shared.Aspsp aspsp;
    public RetrieveDetailsAboutSpecificAspspResponse withAspsp(openapisdk.models.shared.Aspsp aspsp) {
        this.aspsp = aspsp;
        return this;
    }
    public String contentType;
    public RetrieveDetailsAboutSpecificAspspResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RetrieveDetailsAboutSpecificAspspResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}