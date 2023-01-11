package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkSwitchStackRoutingStaticRouteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiseViaOspfEnabled")
    public Boolean advertiseViaOspfEnabled;
    public CreateNetworkSwitchStackRoutingStaticRouteRequestBody withAdvertiseViaOspfEnabled(Boolean advertiseViaOspfEnabled) {
        this.advertiseViaOspfEnabled = advertiseViaOspfEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateNetworkSwitchStackRoutingStaticRouteRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("nextHopIp")
    public String nextHopIp;
    public CreateNetworkSwitchStackRoutingStaticRouteRequestBody withNextHopIp(String nextHopIp) {
        this.nextHopIp = nextHopIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferOverOspfRoutesEnabled")
    public Boolean preferOverOspfRoutesEnabled;
    public CreateNetworkSwitchStackRoutingStaticRouteRequestBody withPreferOverOspfRoutesEnabled(Boolean preferOverOspfRoutesEnabled) {
        this.preferOverOspfRoutesEnabled = preferOverOspfRoutesEnabled;
        return this;
    }
    @JsonProperty("subnet")
    public String subnet;
    public CreateNetworkSwitchStackRoutingStaticRouteRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
}