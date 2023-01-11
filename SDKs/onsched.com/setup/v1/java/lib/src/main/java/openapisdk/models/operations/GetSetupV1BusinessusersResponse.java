package openapisdk.models.operations;



public class GetSetupV1BusinessusersResponse {
    public java.util.Map<String, Object> businessUserListViewModel;
    public GetSetupV1BusinessusersResponse withBusinessUserListViewModel(java.util.Map<String, Object> businessUserListViewModel) {
        this.businessUserListViewModel = businessUserListViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1BusinessusersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1BusinessusersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}