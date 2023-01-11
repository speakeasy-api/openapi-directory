package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DistributionsResponseResultElementsStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocked")
    public Long blocked;
    public DistributionsResponseResultElementsStats withBlocked(Long blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bounced")
    public Long bounced;
    public DistributionsResponseResultElementsStats withBounced(Long bounced) {
        this.bounced = bounced;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complaints")
    public Long complaints;
    public DistributionsResponseResultElementsStats withComplaints(Long complaints) {
        this.complaints = complaints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Long failed;
    public DistributionsResponseResultElementsStats withFailed(Long failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finished")
    public Long finished;
    public DistributionsResponseResultElementsStats withFinished(Long finished) {
        this.finished = finished;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opened")
    public Long opened;
    public DistributionsResponseResultElementsStats withOpened(Long opened) {
        this.opened = opened;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sent")
    public Long sent;
    public DistributionsResponseResultElementsStats withSent(Long sent) {
        this.sent = sent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipped")
    public Long skipped;
    public DistributionsResponseResultElementsStats withSkipped(Long skipped) {
        this.skipped = skipped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("started")
    public Long started;
    public DistributionsResponseResultElementsStats withStarted(Long started) {
        this.started = started;
        return this;
    }
}