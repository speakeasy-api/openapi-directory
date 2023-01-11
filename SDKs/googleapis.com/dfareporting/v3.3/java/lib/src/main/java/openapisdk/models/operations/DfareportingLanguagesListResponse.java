package openapisdk.models.operations;



public class DfareportingLanguagesListResponse {
    public String contentType;
    public DfareportingLanguagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LanguagesListResponse languagesListResponse;
    public DfareportingLanguagesListResponse withLanguagesListResponse(openapisdk.models.shared.LanguagesListResponse languagesListResponse) {
        this.languagesListResponse = languagesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingLanguagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}