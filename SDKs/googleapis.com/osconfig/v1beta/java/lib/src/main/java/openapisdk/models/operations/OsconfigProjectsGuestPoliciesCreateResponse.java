package openapisdk.models.operations;



public class OsconfigProjectsGuestPoliciesCreateResponse {
    public String contentType;
    public OsconfigProjectsGuestPoliciesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GuestPolicy guestPolicy;
    public OsconfigProjectsGuestPoliciesCreateResponse withGuestPolicy(openapisdk.models.shared.GuestPolicy guestPolicy) {
        this.guestPolicy = guestPolicy;
        return this;
    }
    public Long statusCode;
    public OsconfigProjectsGuestPoliciesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}