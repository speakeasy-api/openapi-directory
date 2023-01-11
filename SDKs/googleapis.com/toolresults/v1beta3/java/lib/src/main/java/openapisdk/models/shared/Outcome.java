package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Outcome
 * Interprets a result so that humans and machines can act on it.
**/
public class Outcome {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureDetail")
    public FailureDetail failureDetail;
    public Outcome withFailureDetail(FailureDetail failureDetail) {
        this.failureDetail = failureDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inconclusiveDetail")
    public InconclusiveDetail inconclusiveDetail;
    public Outcome withInconclusiveDetail(InconclusiveDetail inconclusiveDetail) {
        this.inconclusiveDetail = inconclusiveDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skippedDetail")
    public SkippedDetail skippedDetail;
    public Outcome withSkippedDetail(SkippedDetail skippedDetail) {
        this.skippedDetail = skippedDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successDetail")
    public SuccessDetail successDetail;
    public Outcome withSuccessDetail(SuccessDetail successDetail) {
        this.successDetail = successDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public OutcomeSummaryEnum summary;
    public Outcome withSummary(OutcomeSummaryEnum summary) {
        this.summary = summary;
        return this;
    }
}