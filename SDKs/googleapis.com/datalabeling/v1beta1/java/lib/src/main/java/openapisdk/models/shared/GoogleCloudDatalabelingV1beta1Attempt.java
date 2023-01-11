package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1Attempt
 * Records a failed evaluation job run.
**/
public class GoogleCloudDatalabelingV1beta1Attempt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptTime")
    public String attemptTime;
    public GoogleCloudDatalabelingV1beta1Attempt withAttemptTime(String attemptTime) {
        this.attemptTime = attemptTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partialFailures")
    public GoogleRpcStatus[] partialFailures;
    public GoogleCloudDatalabelingV1beta1Attempt withPartialFailures(GoogleRpcStatus[] partialFailures) {
        this.partialFailures = partialFailures;
        return this;
    }
}