package openapisdk.models.operations;



public class FetchPhoneNumberResponse {
    public String contentType;
    public FetchPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchPhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LookupsV2PhoneNumber lookupsV2PhoneNumber;
    public FetchPhoneNumberResponse withLookupsV2PhoneNumber(openapisdk.models.shared.LookupsV2PhoneNumber lookupsV2PhoneNumber) {
        this.lookupsV2PhoneNumber = lookupsV2PhoneNumber;
        return this;
    }
}