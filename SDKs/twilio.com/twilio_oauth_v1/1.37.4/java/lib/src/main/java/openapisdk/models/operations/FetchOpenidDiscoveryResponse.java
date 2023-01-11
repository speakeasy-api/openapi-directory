package openapisdk.models.operations;



public class FetchOpenidDiscoveryResponse {
    public String contentType;
    public FetchOpenidDiscoveryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchOpenidDiscoveryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OauthV1OpenidDiscovery oauthV1OpenidDiscovery;
    public FetchOpenidDiscoveryResponse withOauthV1OpenidDiscovery(openapisdk.models.shared.OauthV1OpenidDiscovery oauthV1OpenidDiscovery) {
        this.oauthV1OpenidDiscovery = oauthV1OpenidDiscovery;
        return this;
    }
}