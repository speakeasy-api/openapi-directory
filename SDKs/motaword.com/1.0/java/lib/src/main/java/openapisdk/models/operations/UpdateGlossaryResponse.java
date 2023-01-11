package openapisdk.models.operations;



public class UpdateGlossaryResponse {
    public String contentType;
    public UpdateGlossaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UpdateGlossaryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Glossary glossary;
    public UpdateGlossaryResponse withGlossary(openapisdk.models.shared.Glossary glossary) {
        this.glossary = glossary;
        return this;
    }
    public Long statusCode;
    public UpdateGlossaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}