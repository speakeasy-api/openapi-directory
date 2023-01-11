package openapisdk.models.operations;



public class FetchSupportingDocumentTypeResponse {
    public String contentType;
    public FetchSupportingDocumentTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSupportingDocumentTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1SupportingDocumentType trusthubV1SupportingDocumentType;
    public FetchSupportingDocumentTypeResponse withTrusthubV1SupportingDocumentType(openapisdk.models.shared.TrusthubV1SupportingDocumentType trusthubV1SupportingDocumentType) {
        this.trusthubV1SupportingDocumentType = trusthubV1SupportingDocumentType;
        return this;
    }
}