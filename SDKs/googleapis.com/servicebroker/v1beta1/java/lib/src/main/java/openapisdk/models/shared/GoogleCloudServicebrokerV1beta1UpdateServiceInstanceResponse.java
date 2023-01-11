package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponse
 * Response for the `UpdateServiceInstance()` method.
**/
public class GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponse {
    public String description;
    public GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    public String operation;
    public GoogleCloudServicebrokerV1beta1UpdateServiceInstanceResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
}