package openapisdk.models.operations;



public class GetVariantAnalyzeResponse {
    public openapisdk.models.shared.Association[] associations;
    public GetVariantAnalyzeResponse withAssociations(openapisdk.models.shared.Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String contentType;
    public GetVariantAnalyzeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVariantAnalyzeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}