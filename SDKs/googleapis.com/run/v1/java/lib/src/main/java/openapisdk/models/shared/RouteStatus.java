package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RouteStatus
 * RouteStatus communicates the observed state of the Route (from the controller).
**/
public class RouteStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Addressable address;
    public RouteStatus withAddress(Addressable address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV1Condition[] conditions;
    public RouteStatus withConditions(GoogleCloudRunV1Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public Integer observedGeneration;
    public RouteStatus withObservedGeneration(Integer observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traffic")
    public TrafficTarget[] traffic;
    public RouteStatus withTraffic(TrafficTarget[] traffic) {
        this.traffic = traffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public RouteStatus withUrl(String url) {
        this.url = url;
        return this;
    }
}