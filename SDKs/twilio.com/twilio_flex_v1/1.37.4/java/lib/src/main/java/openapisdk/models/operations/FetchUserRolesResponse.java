package openapisdk.models.operations;



public class FetchUserRolesResponse {
    public String contentType;
    public FetchUserRolesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchUserRolesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1UserRoles flexV1UserRoles;
    public FetchUserRolesResponse withFlexV1UserRoles(openapisdk.models.shared.FlexV1UserRoles flexV1UserRoles) {
        this.flexV1UserRoles = flexV1UserRoles;
        return this;
    }
}