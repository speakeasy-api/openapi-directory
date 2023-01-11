package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueuedResource
 * A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
**/
public class QueuedResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestEffort")
    public java.util.Map<String, Object> bestEffort;
    public QueuedResource withBestEffort(java.util.Map<String, Object> bestEffort) {
        this.bestEffort = bestEffort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guaranteed")
    public Guaranteed guaranteed;
    public QueuedResource withGuaranteed(Guaranteed guaranteed) {
        this.guaranteed = guaranteed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public QueuedResource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queueingPolicy")
    public QueueingPolicy queueingPolicy;
    public QueuedResource withQueueingPolicy(QueueingPolicy queueingPolicy) {
        this.queueingPolicy = queueingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public QueuedResourceState state;
    public QueuedResource withState(QueuedResourceState state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tpu")
    public Tpu tpu;
    public QueuedResource withTpu(Tpu tpu) {
        this.tpu = tpu;
        return this;
    }
}