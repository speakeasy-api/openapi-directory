package openapisdk.models.operations;



public class CreateGlossaryResponse {
    public String contentType;
    public CreateGlossaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateGlossaryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Glossary glossary;
    public CreateGlossaryResponse withGlossary(openapisdk.models.shared.Glossary glossary) {
        this.glossary = glossary;
        return this;
    }
    public Long statusCode;
    public CreateGlossaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}