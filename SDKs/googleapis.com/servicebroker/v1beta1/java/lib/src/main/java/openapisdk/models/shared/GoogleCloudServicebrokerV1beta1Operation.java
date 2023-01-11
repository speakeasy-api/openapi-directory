package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1Operation
 * Describes a long running operation, which conforms to OpenService API.
**/
public class GoogleCloudServicebrokerV1beta1Operation {
    public String description;
    public GoogleCloudServicebrokerV1beta1Operation withDescription(String description) {
        this.description = description;
        return this;
    }
    public String state;
    public GoogleCloudServicebrokerV1beta1Operation withState(String state) {
        this.state = state;
        return this;
    }
}