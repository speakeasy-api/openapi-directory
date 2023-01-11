package openapisdk.models.operations;



public class GetAvailableCorporatePermissionsByIdResponse {
    public String contentType;
    public GetAvailableCorporatePermissionsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionList permissionList;
    public GetAvailableCorporatePermissionsByIdResponse withPermissionList(openapisdk.models.shared.PermissionList permissionList) {
        this.permissionList = permissionList;
        return this;
    }
    public Long statusCode;
    public GetAvailableCorporatePermissionsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}