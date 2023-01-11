package openapisdk.models.operations;



public class GetSubstanceRoleAssociationsResponse {
    public openapisdk.models.shared.Association[] associations;
    public GetSubstanceRoleAssociationsResponse withAssociations(openapisdk.models.shared.Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String contentType;
    public GetSubstanceRoleAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSubstanceRoleAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}