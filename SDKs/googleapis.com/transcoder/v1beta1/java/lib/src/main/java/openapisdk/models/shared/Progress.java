package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Progress
 * Estimated fractional progress for each step, from `0` to `1`.
**/
public class Progress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyzed")
    public Double analyzed;
    public Progress withAnalyzed(Double analyzed) {
        this.analyzed = analyzed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encoded")
    public Double encoded;
    public Progress withEncoded(Double encoded) {
        this.encoded = encoded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notified")
    public Double notified;
    public Progress withNotified(Double notified) {
        this.notified = notified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uploaded")
    public Double uploaded;
    public Progress withUploaded(Double uploaded) {
        this.uploaded = uploaded;
        return this;
    }
}