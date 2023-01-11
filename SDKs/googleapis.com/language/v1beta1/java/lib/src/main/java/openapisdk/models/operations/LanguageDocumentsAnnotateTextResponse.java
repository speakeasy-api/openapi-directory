package openapisdk.models.operations;



public class LanguageDocumentsAnnotateTextResponse {
    public openapisdk.models.shared.AnnotateTextResponse annotateTextResponse;
    public LanguageDocumentsAnnotateTextResponse withAnnotateTextResponse(openapisdk.models.shared.AnnotateTextResponse annotateTextResponse) {
        this.annotateTextResponse = annotateTextResponse;
        return this;
    }
    public String contentType;
    public LanguageDocumentsAnnotateTextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LanguageDocumentsAnnotateTextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}