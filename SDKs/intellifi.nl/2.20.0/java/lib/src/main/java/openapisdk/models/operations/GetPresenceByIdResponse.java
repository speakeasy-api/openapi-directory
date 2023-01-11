package openapisdk.models.operations;



public class GetPresenceByIdResponse {
    public String contentType;
    public GetPresenceByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Presence presence;
    public GetPresenceByIdResponse withPresence(openapisdk.models.shared.Presence presence) {
        this.presence = presence;
        return this;
    }
    public Long statusCode;
    public GetPresenceByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}