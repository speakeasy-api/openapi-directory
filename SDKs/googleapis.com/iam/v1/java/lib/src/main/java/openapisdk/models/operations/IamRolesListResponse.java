package openapisdk.models.operations;



public class IamRolesListResponse {
    public String contentType;
    public IamRolesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRolesResponse listRolesResponse;
    public IamRolesListResponse withListRolesResponse(openapisdk.models.shared.ListRolesResponse listRolesResponse) {
        this.listRolesResponse = listRolesResponse;
        return this;
    }
    public Long statusCode;
    public IamRolesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}