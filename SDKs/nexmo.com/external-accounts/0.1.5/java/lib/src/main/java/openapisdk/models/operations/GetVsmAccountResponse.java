package openapisdk.models.operations;



public class GetVsmAccountResponse {
    public openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse;
    public GetVsmAccountResponse withFourHundredAndOneResponse(openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse) {
        this.fourHundredAndOneResponse = fourHundredAndOneResponse;
        return this;
    }
    public String contentType;
    public GetVsmAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVsmAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VsmAccountResponse vsmAccountResponse;
    public GetVsmAccountResponse withVsmAccountResponse(openapisdk.models.shared.VsmAccountResponse vsmAccountResponse) {
        this.vsmAccountResponse = vsmAccountResponse;
        return this;
    }
}