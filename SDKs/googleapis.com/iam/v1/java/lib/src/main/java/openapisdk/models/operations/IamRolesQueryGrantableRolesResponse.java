package openapisdk.models.operations;



public class IamRolesQueryGrantableRolesResponse {
    public String contentType;
    public IamRolesQueryGrantableRolesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.QueryGrantableRolesResponse queryGrantableRolesResponse;
    public IamRolesQueryGrantableRolesResponse withQueryGrantableRolesResponse(openapisdk.models.shared.QueryGrantableRolesResponse queryGrantableRolesResponse) {
        this.queryGrantableRolesResponse = queryGrantableRolesResponse;
        return this;
    }
    public Long statusCode;
    public IamRolesQueryGrantableRolesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}