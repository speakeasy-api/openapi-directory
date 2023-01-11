package openapisdk.models.operations;



public class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse {
    public String contentType;
    public ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.SentenceDependenciesOut sentenceDependenciesOut;
    public ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse withSentenceDependenciesOut(openapisdk.models.shared.SentenceDependenciesOut sentenceDependenciesOut) {
        this.sentenceDependenciesOut = sentenceDependenciesOut;
        return this;
    }
    public Long statusCode;
    public ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}