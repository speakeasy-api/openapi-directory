package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RunPipelineRequest
 * The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Life Sciences service account or the request will fail.
**/
public class RunPipelineRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public RunPipelineRequest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipeline")
    public Pipeline pipeline;
    public RunPipelineRequest withPipeline(Pipeline pipeline) {
        this.pipeline = pipeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubSubTopic")
    public String pubSubTopic;
    public RunPipelineRequest withPubSubTopic(String pubSubTopic) {
        this.pubSubTopic = pubSubTopic;
        return this;
    }
}