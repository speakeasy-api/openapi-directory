package openapisdk.models.operations;



public class GetInstanceObjectResponse {
    public openapisdk.models.shared.Association[] associations;
    public GetInstanceObjectResponse withAssociations(openapisdk.models.shared.Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String contentType;
    public GetInstanceObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInstanceObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}