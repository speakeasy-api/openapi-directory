package openapisdk.models.operations;



public class CreateCustomerProfileResponse {
    public String contentType;
    public CreateCustomerProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCustomerProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1CustomerProfile trusthubV1CustomerProfile;
    public CreateCustomerProfileResponse withTrusthubV1CustomerProfile(openapisdk.models.shared.TrusthubV1CustomerProfile trusthubV1CustomerProfile) {
        this.trusthubV1CustomerProfile = trusthubV1CustomerProfile;
        return this;
    }
}