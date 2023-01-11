package openapisdk.models.operations;



public class CreatePhoneNumberResponse {
    public String contentType;
    public CreatePhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreatePhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrunkingV1TrunkPhoneNumber trunkingV1TrunkPhoneNumber;
    public CreatePhoneNumberResponse withTrunkingV1TrunkPhoneNumber(openapisdk.models.shared.TrunkingV1TrunkPhoneNumber trunkingV1TrunkPhoneNumber) {
        this.trunkingV1TrunkPhoneNumber = trunkingV1TrunkPhoneNumber;
        return this;
    }
}