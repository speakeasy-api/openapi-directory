package openapisdk.models.operations;



public class FetchOutgoingCallerIdResponse {
    public String contentType;
    public FetchOutgoingCallerIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchOutgoingCallerIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountOutgoingCallerId apiV2010AccountOutgoingCallerId;
    public FetchOutgoingCallerIdResponse withApiV2010AccountOutgoingCallerId(openapisdk.models.shared.ApiV2010AccountOutgoingCallerId apiV2010AccountOutgoingCallerId) {
        this.apiV2010AccountOutgoingCallerId = apiV2010AccountOutgoingCallerId;
        return this;
    }
}