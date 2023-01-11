package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDeviceSwitchRoutingStaticRouteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertiseViaOspfEnabled")
    public Boolean advertiseViaOspfEnabled;
    public CreateDeviceSwitchRoutingStaticRouteRequestBody withAdvertiseViaOspfEnabled(Boolean advertiseViaOspfEnabled) {
        this.advertiseViaOspfEnabled = advertiseViaOspfEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateDeviceSwitchRoutingStaticRouteRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("nextHopIp")
    public String nextHopIp;
    public CreateDeviceSwitchRoutingStaticRouteRequestBody withNextHopIp(String nextHopIp) {
        this.nextHopIp = nextHopIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferOverOspfRoutesEnabled")
    public Boolean preferOverOspfRoutesEnabled;
    public CreateDeviceSwitchRoutingStaticRouteRequestBody withPreferOverOspfRoutesEnabled(Boolean preferOverOspfRoutesEnabled) {
        this.preferOverOspfRoutesEnabled = preferOverOspfRoutesEnabled;
        return this;
    }
    @JsonProperty("subnet")
    public String subnet;
    public CreateDeviceSwitchRoutingStaticRouteRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
}