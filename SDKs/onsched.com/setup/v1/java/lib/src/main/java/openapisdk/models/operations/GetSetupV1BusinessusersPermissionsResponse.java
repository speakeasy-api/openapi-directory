package openapisdk.models.operations;



public class GetSetupV1BusinessusersPermissionsResponse {
    public java.util.Map<String, Object> businessPermissionListViewModel;
    public GetSetupV1BusinessusersPermissionsResponse withBusinessPermissionListViewModel(java.util.Map<String, Object> businessPermissionListViewModel) {
        this.businessPermissionListViewModel = businessPermissionListViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1BusinessusersPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1BusinessusersPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}