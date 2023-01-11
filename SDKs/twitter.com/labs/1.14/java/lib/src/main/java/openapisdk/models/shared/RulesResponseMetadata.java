package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RulesResponseMetadata {
    @JsonProperty("sent")
    public String sent;
    public RulesResponseMetadata withSent(String sent) {
        this.sent = sent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public java.util.Map<String, Object> summary;
    public RulesResponseMetadata withSummary(java.util.Map<String, Object> summary) {
        this.summary = summary;
        return this;
    }
}