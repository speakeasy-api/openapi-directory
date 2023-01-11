package openapisdk.models.operations;



public class UpdateOutgoingCallerIdResponse {
    public String contentType;
    public UpdateOutgoingCallerIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateOutgoingCallerIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountOutgoingCallerId apiV2010AccountOutgoingCallerId;
    public UpdateOutgoingCallerIdResponse withApiV2010AccountOutgoingCallerId(openapisdk.models.shared.ApiV2010AccountOutgoingCallerId apiV2010AccountOutgoingCallerId) {
        this.apiV2010AccountOutgoingCallerId = apiV2010AccountOutgoingCallerId;
        return this;
    }
}