package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse
 * Response for the `CreateServiceInstance()` method.
**/
public class GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse {
    public String description;
    public GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    public String operation;
    public GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
}