package openapisdk.models.operations;



public class GetGlossariesResponse {
    public String contentType;
    public GetGlossariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetGlossariesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.GlossaryList glossaryList;
    public GetGlossariesResponse withGlossaryList(openapisdk.models.shared.GlossaryList glossaryList) {
        this.glossaryList = glossaryList;
        return this;
    }
    public Long statusCode;
    public GetGlossariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}