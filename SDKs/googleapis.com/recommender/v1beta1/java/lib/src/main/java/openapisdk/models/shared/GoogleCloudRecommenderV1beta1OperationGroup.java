package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1OperationGroup
 * Group of operations that need to be performed atomically.
**/
public class GoogleCloudRecommenderV1beta1OperationGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public GoogleCloudRecommenderV1beta1Operation[] operations;
    public GoogleCloudRecommenderV1beta1OperationGroup withOperations(GoogleCloudRecommenderV1beta1Operation[] operations) {
        this.operations = operations;
        return this;
    }
}