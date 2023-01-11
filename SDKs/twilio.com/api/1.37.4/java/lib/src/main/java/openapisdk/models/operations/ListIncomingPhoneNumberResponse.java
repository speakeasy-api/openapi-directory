package openapisdk.models.operations;



public class ListIncomingPhoneNumberResponse {
    public String contentType;
    public ListIncomingPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListIncomingPhoneNumberListIncomingPhoneNumberResponse listIncomingPhoneNumberResponse;
    public ListIncomingPhoneNumberResponse withListIncomingPhoneNumberResponse(ListIncomingPhoneNumberListIncomingPhoneNumberResponse listIncomingPhoneNumberResponse) {
        this.listIncomingPhoneNumberResponse = listIncomingPhoneNumberResponse;
        return this;
    }
    public Long statusCode;
    public ListIncomingPhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}