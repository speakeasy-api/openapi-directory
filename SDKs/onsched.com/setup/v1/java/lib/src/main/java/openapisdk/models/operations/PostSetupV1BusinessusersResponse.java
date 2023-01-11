package openapisdk.models.operations;



public class PostSetupV1BusinessusersResponse {
    public openapisdk.models.shared.BusinessUserViewModel businessUserViewModel;
    public PostSetupV1BusinessusersResponse withBusinessUserViewModel(openapisdk.models.shared.BusinessUserViewModel businessUserViewModel) {
        this.businessUserViewModel = businessUserViewModel;
        return this;
    }
    public String contentType;
    public PostSetupV1BusinessusersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSetupV1BusinessusersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}