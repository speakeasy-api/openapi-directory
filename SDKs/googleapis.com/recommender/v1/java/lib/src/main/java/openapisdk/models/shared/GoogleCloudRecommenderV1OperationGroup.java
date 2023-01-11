package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1OperationGroup
 * Group of operations that need to be performed atomically.
**/
public class GoogleCloudRecommenderV1OperationGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public GoogleCloudRecommenderV1Operation[] operations;
    public GoogleCloudRecommenderV1OperationGroup withOperations(GoogleCloudRecommenderV1Operation[] operations) {
        this.operations = operations;
        return this;
    }
}