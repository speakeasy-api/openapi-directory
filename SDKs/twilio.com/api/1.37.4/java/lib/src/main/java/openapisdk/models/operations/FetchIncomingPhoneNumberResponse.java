package openapisdk.models.operations;



public class FetchIncomingPhoneNumberResponse {
    public String contentType;
    public FetchIncomingPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchIncomingPhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber apiV2010AccountIncomingPhoneNumber;
    public FetchIncomingPhoneNumberResponse withApiV2010AccountIncomingPhoneNumber(openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber apiV2010AccountIncomingPhoneNumber) {
        this.apiV2010AccountIncomingPhoneNumber = apiV2010AccountIncomingPhoneNumber;
        return this;
    }
}