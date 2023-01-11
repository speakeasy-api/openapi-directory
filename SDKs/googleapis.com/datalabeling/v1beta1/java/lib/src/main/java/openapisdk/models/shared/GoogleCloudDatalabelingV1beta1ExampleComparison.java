package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ExampleComparison
 * Example comparisons comparing ground truth output and predictions for a specific input.
**/
public class GoogleCloudDatalabelingV1beta1ExampleComparison {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groundTruthExample")
    public GoogleCloudDatalabelingV1beta1Example groundTruthExample;
    public GoogleCloudDatalabelingV1beta1ExampleComparison withGroundTruthExample(GoogleCloudDatalabelingV1beta1Example groundTruthExample) {
        this.groundTruthExample = groundTruthExample;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelCreatedExamples")
    public GoogleCloudDatalabelingV1beta1Example[] modelCreatedExamples;
    public GoogleCloudDatalabelingV1beta1ExampleComparison withModelCreatedExamples(GoogleCloudDatalabelingV1beta1Example[] modelCreatedExamples) {
        this.modelCreatedExamples = modelCreatedExamples;
        return this;
    }
}