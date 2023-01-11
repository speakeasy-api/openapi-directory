package openapisdk.models.operations;



public class CheckVideoForTagResponse {
    public String contentType;
    public CheckVideoForTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckVideoForTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CheckVideoForTagResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Tag tag;
    public CheckVideoForTagResponse withTag(openapisdk.models.shared.Tag tag) {
        this.tag = tag;
        return this;
    }
}