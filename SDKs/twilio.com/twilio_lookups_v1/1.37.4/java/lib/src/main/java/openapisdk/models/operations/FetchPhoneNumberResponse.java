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
    public openapisdk.models.shared.LookupsV1PhoneNumber lookupsV1PhoneNumber;
    public FetchPhoneNumberResponse withLookupsV1PhoneNumber(openapisdk.models.shared.LookupsV1PhoneNumber lookupsV1PhoneNumber) {
        this.lookupsV1PhoneNumber = lookupsV1PhoneNumber;
        return this;
    }
}