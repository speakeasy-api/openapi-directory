package openapisdk.models.operations;



public class GetGlossaryResponse {
    public String contentType;
    public GetGlossaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetGlossaryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Glossary glossary;
    public GetGlossaryResponse withGlossary(openapisdk.models.shared.Glossary glossary) {
        this.glossary = glossary;
        return this;
    }
    public Long statusCode;
    public GetGlossaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}