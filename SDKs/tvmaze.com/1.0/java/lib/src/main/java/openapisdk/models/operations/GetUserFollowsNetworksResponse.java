package openapisdk.models.operations;



public class GetUserFollowsNetworksResponse {
    public String contentType;
    public GetUserFollowsNetworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NetworkFollow[] networkFollows;
    public GetUserFollowsNetworksResponse withNetworkFollows(openapisdk.models.shared.NetworkFollow[] networkFollows) {
        this.networkFollows = networkFollows;
        return this;
    }
    public Long statusCode;
    public GetUserFollowsNetworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}