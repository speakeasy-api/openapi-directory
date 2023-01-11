package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1LabelStats
 * Statistics about annotation specs.
**/
public class GoogleCloudDatalabelingV1beta1LabelStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exampleCount")
    public java.util.Map<String, String> exampleCount;
    public GoogleCloudDatalabelingV1beta1LabelStats withExampleCount(java.util.Map<String, String> exampleCount) {
        this.exampleCount = exampleCount;
        return this;
    }
}