package openapisdk.models.operations;



public class LanguageDocumentsClassifyTextResponse {
    public openapisdk.models.shared.ClassifyTextResponse classifyTextResponse;
    public LanguageDocumentsClassifyTextResponse withClassifyTextResponse(openapisdk.models.shared.ClassifyTextResponse classifyTextResponse) {
        this.classifyTextResponse = classifyTextResponse;
        return this;
    }
    public String contentType;
    public LanguageDocumentsClassifyTextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LanguageDocumentsClassifyTextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}