package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchStackRoutingStaticRouteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiseViaOspfEnabled")
    public Boolean advertiseViaOspfEnabled;
    public UpdateNetworkSwitchStackRoutingStaticRouteRequestBody withAdvertiseViaOspfEnabled(Boolean advertiseViaOspfEnabled) {
        this.advertiseViaOspfEnabled = advertiseViaOspfEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkSwitchStackRoutingStaticRouteRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextHopIp")
    public String nextHopIp;
    public UpdateNetworkSwitchStackRoutingStaticRouteRequestBody withNextHopIp(String nextHopIp) {
        this.nextHopIp = nextHopIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferOverOspfRoutesEnabled")
    public Boolean preferOverOspfRoutesEnabled;
    public UpdateNetworkSwitchStackRoutingStaticRouteRequestBody withPreferOverOspfRoutesEnabled(Boolean preferOverOspfRoutesEnabled) {
        this.preferOverOspfRoutesEnabled = preferOverOspfRoutesEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public UpdateNetworkSwitchStackRoutingStaticRouteRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
}