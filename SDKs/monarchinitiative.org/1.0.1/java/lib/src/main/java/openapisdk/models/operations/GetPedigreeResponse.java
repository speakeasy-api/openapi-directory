package openapisdk.models.operations;



public class GetPedigreeResponse {
    public openapisdk.models.shared.Association[] associations;
    public GetPedigreeResponse withAssociations(openapisdk.models.shared.Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String contentType;
    public GetPedigreeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPedigreeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}