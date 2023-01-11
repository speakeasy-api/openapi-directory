package openapisdk.models.operations;



public class GetCommunicationPreferencesV3DefinitionsGetPageResponse {
    public byte[] body;
    public GetCommunicationPreferencesV3DefinitionsGetPageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCommunicationPreferencesV3DefinitionsGetPageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCommunicationPreferencesV3DefinitionsGetPageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubscriptionDefinitionsResponse subscriptionDefinitionsResponse;
    public GetCommunicationPreferencesV3DefinitionsGetPageResponse withSubscriptionDefinitionsResponse(openapisdk.models.shared.SubscriptionDefinitionsResponse subscriptionDefinitionsResponse) {
        this.subscriptionDefinitionsResponse = subscriptionDefinitionsResponse;
        return this;
    }
}