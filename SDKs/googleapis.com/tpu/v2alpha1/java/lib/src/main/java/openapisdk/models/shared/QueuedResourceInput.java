package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueuedResourceInput
 * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
**/
public class QueuedResourceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestEffort")
    public java.util.Map<String, Object> bestEffort;
    public QueuedResourceInput withBestEffort(java.util.Map<String, Object> bestEffort) {
        this.bestEffort = bestEffort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteed")
    public Guaranteed guaranteed;
    public QueuedResourceInput withGuaranteed(Guaranteed guaranteed) {
        this.guaranteed = guaranteed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queueingPolicy")
    public QueueingPolicy queueingPolicy;
    public QueuedResourceInput withQueueingPolicy(QueueingPolicy queueingPolicy) {
        this.queueingPolicy = queueingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public QueuedResourceState state;
    public QueuedResourceInput withState(QueuedResourceState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tpu")
    public TpuInput tpu;
    public QueuedResourceInput withTpu(TpuInput tpu) {
        this.tpu = tpu;
        return this;
    }
}