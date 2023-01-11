package openapisdk.models.operations;



public class FetchCustomerProfileResponse {
    public String contentType;
    public FetchCustomerProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCustomerProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1CustomerProfile trusthubV1CustomerProfile;
    public FetchCustomerProfileResponse withTrusthubV1CustomerProfile(openapisdk.models.shared.TrusthubV1CustomerProfile trusthubV1CustomerProfile) {
        this.trusthubV1CustomerProfile = trusthubV1CustomerProfile;
        return this;
    }
}