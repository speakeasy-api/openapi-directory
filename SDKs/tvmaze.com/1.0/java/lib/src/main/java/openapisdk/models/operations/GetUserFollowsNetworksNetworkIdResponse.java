package openapisdk.models.operations;



public class GetUserFollowsNetworksNetworkIdResponse {
    public String contentType;
    public GetUserFollowsNetworksNetworkIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NetworkFollow networkFollow;
    public GetUserFollowsNetworksNetworkIdResponse withNetworkFollow(openapisdk.models.shared.NetworkFollow networkFollow) {
        this.networkFollow = networkFollow;
        return this;
    }
    public Long statusCode;
    public GetUserFollowsNetworksNetworkIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}