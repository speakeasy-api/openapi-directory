package openapisdk.models.operations;



public class GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse {
    public byte[] body;
    public GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PublicSubscriptionStatusesResponse publicSubscriptionStatusesResponse;
    public GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse withPublicSubscriptionStatusesResponse(openapisdk.models.shared.PublicSubscriptionStatusesResponse publicSubscriptionStatusesResponse) {
        this.publicSubscriptionStatusesResponse = publicSubscriptionStatusesResponse;
        return this;
    }
    public Long statusCode;
    public GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}