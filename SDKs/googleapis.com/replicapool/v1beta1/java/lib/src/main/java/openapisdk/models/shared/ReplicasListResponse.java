package openapisdk.models.shared;



public class ReplicasListResponse {
    public String nextPageToken;
    public ReplicasListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    public Replica[] resources;
    public ReplicasListResponse withResources(Replica[] resources) {
        this.resources = resources;
        return this;
    }
}