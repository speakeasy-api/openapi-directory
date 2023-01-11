package openapisdk.models.operations;



public class PutUserFollowsNetworksNetworkIdResponse {
    public String contentType;
    public PutUserFollowsNetworksNetworkIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NetworkFollow networkFollow;
    public PutUserFollowsNetworksNetworkIdResponse withNetworkFollow(openapisdk.models.shared.NetworkFollow networkFollow) {
        this.networkFollow = networkFollow;
        return this;
    }
    public Long statusCode;
    public PutUserFollowsNetworksNetworkIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}