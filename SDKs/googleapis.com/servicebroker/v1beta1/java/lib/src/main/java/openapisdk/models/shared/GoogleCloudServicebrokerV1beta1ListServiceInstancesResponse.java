package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse
 * The response for the `ListServiceInstances()` method.
**/
public class GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse {
    public String description;
    public GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    public GoogleCloudServicebrokerV1beta1ServiceInstance[] instances;
    public GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse withInstances(GoogleCloudServicebrokerV1beta1ServiceInstance[] instances) {
        this.instances = instances;
        return this;
    }
    public String nextPageToken;
    public GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}