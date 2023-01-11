package openapisdk.models.operations;



public class GetWaAccountResponse {
    public openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse;
    public GetWaAccountResponse withFourHundredAndOneResponse(openapisdk.models.shared.FourHundredAndOneResponse fourHundredAndOneResponse) {
        this.fourHundredAndOneResponse = fourHundredAndOneResponse;
        return this;
    }
    public String contentType;
    public GetWaAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWaAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WaAccountResponse waAccountResponse;
    public GetWaAccountResponse withWaAccountResponse(openapisdk.models.shared.WaAccountResponse waAccountResponse) {
        this.waAccountResponse = waAccountResponse;
        return this;
    }
}