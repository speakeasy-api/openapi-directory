package openapisdk.models.operations;



public class ListServiceRoleResponse {
    public String contentType;
    public ListServiceRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListServiceRoleListServiceRoleResponse listServiceRoleResponse;
    public ListServiceRoleResponse withListServiceRoleResponse(ListServiceRoleListServiceRoleResponse listServiceRoleResponse) {
        this.listServiceRoleResponse = listServiceRoleResponse;
        return this;
    }
    public Long statusCode;
    public ListServiceRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}