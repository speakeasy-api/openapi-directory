package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1ListBindingsResponse
 * The response for the `ListBindings()` method.
**/
public class GoogleCloudServicebrokerV1beta1ListBindingsResponse {
    public GoogleCloudServicebrokerV1beta1Binding[] bindings;
    public GoogleCloudServicebrokerV1beta1ListBindingsResponse withBindings(GoogleCloudServicebrokerV1beta1Binding[] bindings) {
        this.bindings = bindings;
        return this;
    }
    public String description;
    public GoogleCloudServicebrokerV1beta1ListBindingsResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    public String nextPageToken;
    public GoogleCloudServicebrokerV1beta1ListBindingsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}