package openapisdk.models.operations;



public class GetSetupV1BusinessusersIdResponse {
    public openapisdk.models.shared.BusinessUserViewModel businessUserViewModel;
    public GetSetupV1BusinessusersIdResponse withBusinessUserViewModel(openapisdk.models.shared.BusinessUserViewModel businessUserViewModel) {
        this.businessUserViewModel = businessUserViewModel;
        return this;
    }
    public String contentType;
    public GetSetupV1BusinessusersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSetupV1BusinessusersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}