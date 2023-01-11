package openapisdk.models.operations;



public class IamProjectsRolesListResponse {
    public String contentType;
    public IamProjectsRolesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRolesResponse listRolesResponse;
    public IamProjectsRolesListResponse withListRolesResponse(openapisdk.models.shared.ListRolesResponse listRolesResponse) {
        this.listRolesResponse = listRolesResponse;
        return this;
    }
    public Long statusCode;
    public IamProjectsRolesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}