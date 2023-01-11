package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Routing
 * This contains all routing specific configurations.
**/
public class Routing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calc_points")
    public Boolean calcPoints;
    public Routing withCalcPoints(Boolean calcPoints) {
        this.calcPoints = calcPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consider_traffic")
    public Boolean considerTraffic;
    public Routing withConsiderTraffic(Boolean considerTraffic) {
        this.considerTraffic = considerTraffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("curbside_strictness")
    public RoutingCurbsideStrictnessEnum curbsideStrictness;
    public Routing withCurbsideStrictness(RoutingCurbsideStrictnessEnum curbsideStrictness) {
        this.curbsideStrictness = curbsideStrictness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fail_fast")
    public Boolean failFast;
    public Routing withFailFast(Boolean failFast) {
        this.failFast = failFast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network_data_provider")
    public RoutingNetworkDataProviderEnum networkDataProvider;
    public Routing withNetworkDataProvider(RoutingNetworkDataProviderEnum networkDataProvider) {
        this.networkDataProvider = networkDataProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("return_snapped_waypoints")
    public Boolean returnSnappedWaypoints;
    public Routing withReturnSnappedWaypoints(Boolean returnSnappedWaypoints) {
        this.returnSnappedWaypoints = returnSnappedWaypoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snap_preventions")
    public RoutingSnapPreventionsEnum[] snapPreventions;
    public Routing withSnapPreventions(RoutingSnapPreventionsEnum[] snapPreventions) {
        this.snapPreventions = snapPreventions;
        return this;
    }
}