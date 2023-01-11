package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceStatusInput
 * The current state of the Service. Output only.
**/
public class ServiceStatusInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Addressable address;
    public ServiceStatusInput withAddress(Addressable address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV1Condition[] conditions;
    public ServiceStatusInput withConditions(GoogleCloudRunV1Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestCreatedRevisionName")
    public String latestCreatedRevisionName;
    public ServiceStatusInput withLatestCreatedRevisionName(String latestCreatedRevisionName) {
        this.latestCreatedRevisionName = latestCreatedRevisionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestReadyRevisionName")
    public String latestReadyRevisionName;
    public ServiceStatusInput withLatestReadyRevisionName(String latestReadyRevisionName) {
        this.latestReadyRevisionName = latestReadyRevisionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public Integer observedGeneration;
    public ServiceStatusInput withObservedGeneration(Integer observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traffic")
    public TrafficTargetInput[] traffic;
    public ServiceStatusInput withTraffic(TrafficTargetInput[] traffic) {
        this.traffic = traffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ServiceStatusInput withUrl(String url) {
        this.url = url;
        return this;
    }
}