package openapisdk.models.operations;



public class UpdateCustomerProfileResponse {
    public String contentType;
    public UpdateCustomerProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCustomerProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1CustomerProfile trusthubV1CustomerProfile;
    public UpdateCustomerProfileResponse withTrusthubV1CustomerProfile(openapisdk.models.shared.TrusthubV1CustomerProfile trusthubV1CustomerProfile) {
        this.trusthubV1CustomerProfile = trusthubV1CustomerProfile;
        return this;
    }
}