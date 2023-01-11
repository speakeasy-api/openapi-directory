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
    public openapisdk.models.shared.TrunkingV1TrunkPhoneNumber trunkingV1TrunkPhoneNumber;
    public FetchPhoneNumberResponse withTrunkingV1TrunkPhoneNumber(openapisdk.models.shared.TrunkingV1TrunkPhoneNumber trunkingV1TrunkPhoneNumber) {
        this.trunkingV1TrunkPhoneNumber = trunkingV1TrunkPhoneNumber;
        return this;
    }
}