package openapisdk.models.operations;



public class PutSetupV1BusinessusersIdResponse {
    public openapisdk.models.shared.BusinessUserViewModel businessUserViewModel;
    public PutSetupV1BusinessusersIdResponse withBusinessUserViewModel(openapisdk.models.shared.BusinessUserViewModel businessUserViewModel) {
        this.businessUserViewModel = businessUserViewModel;
        return this;
    }
    public String contentType;
    public PutSetupV1BusinessusersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutSetupV1BusinessusersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}