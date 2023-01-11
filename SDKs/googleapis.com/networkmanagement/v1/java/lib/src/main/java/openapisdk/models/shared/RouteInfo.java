package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RouteInfo
 * For display only. Metadata associated with a Compute Engine route.
**/
public class RouteInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destIpRange")
    public String destIpRange;
    public RouteInfo withDestIpRange(String destIpRange) {
        this.destIpRange = destIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destPortRanges")
    public String[] destPortRanges;
    public RouteInfo withDestPortRanges(String[] destPortRanges) {
        this.destPortRanges = destPortRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public RouteInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceTags")
    public String[] instanceTags;
    public RouteInfo withInstanceTags(String[] instanceTags) {
        this.instanceTags = instanceTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUri")
    public String networkUri;
    public RouteInfo withNetworkUri(String networkUri) {
        this.networkUri = networkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextHop")
    public String nextHop;
    public RouteInfo withNextHop(String nextHop) {
        this.nextHop = nextHop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextHopType")
    public RouteInfoNextHopTypeEnum nextHopType;
    public RouteInfo withNextHopType(RouteInfoNextHopTypeEnum nextHopType) {
        this.nextHopType = nextHopType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Integer priority;
    public RouteInfo withPriority(Integer priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocols")
    public String[] protocols;
    public RouteInfo withProtocols(String[] protocols) {
        this.protocols = protocols;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeType")
    public RouteInfoRouteTypeEnum routeType;
    public RouteInfo withRouteType(RouteInfoRouteTypeEnum routeType) {
        this.routeType = routeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcIpRange")
    public String srcIpRange;
    public RouteInfo withSrcIpRange(String srcIpRange) {
        this.srcIpRange = srcIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcPortRanges")
    public String[] srcPortRanges;
    public RouteInfo withSrcPortRanges(String[] srcPortRanges) {
        this.srcPortRanges = srcPortRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public RouteInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
}