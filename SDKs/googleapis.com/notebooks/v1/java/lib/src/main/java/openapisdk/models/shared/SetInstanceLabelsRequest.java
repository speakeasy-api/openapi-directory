package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetInstanceLabelsRequest
 * Request for setting instance labels.
**/
public class SetInstanceLabelsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public SetInstanceLabelsRequest withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}