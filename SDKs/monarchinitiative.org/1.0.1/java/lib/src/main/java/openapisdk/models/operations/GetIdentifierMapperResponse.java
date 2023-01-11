package openapisdk.models.operations;



public class GetIdentifierMapperResponse {
    public openapisdk.models.shared.Association[] associations;
    public GetIdentifierMapperResponse withAssociations(openapisdk.models.shared.Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String contentType;
    public GetIdentifierMapperResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetIdentifierMapperResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}