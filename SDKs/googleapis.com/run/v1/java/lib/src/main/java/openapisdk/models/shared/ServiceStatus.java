package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceStatus
 * The current state of the Service. Output only.
**/
public class ServiceStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Addressable address;
    public ServiceStatus withAddress(Addressable address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV1Condition[] conditions;
    public ServiceStatus withConditions(GoogleCloudRunV1Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestCreatedRevisionName")
    public String latestCreatedRevisionName;
    public ServiceStatus withLatestCreatedRevisionName(String latestCreatedRevisionName) {
        this.latestCreatedRevisionName = latestCreatedRevisionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestReadyRevisionName")
    public String latestReadyRevisionName;
    public ServiceStatus withLatestReadyRevisionName(String latestReadyRevisionName) {
        this.latestReadyRevisionName = latestReadyRevisionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public Integer observedGeneration;
    public ServiceStatus withObservedGeneration(Integer observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traffic")
    public TrafficTarget[] traffic;
    public ServiceStatus withTraffic(TrafficTarget[] traffic) {
        this.traffic = traffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ServiceStatus withUrl(String url) {
        this.url = url;
        return this;
    }
}