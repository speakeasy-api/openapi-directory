package openapisdk.models.shared;



public class PoolsListResponse {
    public String nextPageToken;
    public PoolsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    public Pool[] resources;
    public PoolsListResponse withResources(Pool[] resources) {
        this.resources = resources;
        return this;
    }
}