package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkApplianceStaticRouteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkApplianceStaticRouteRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedIpAssignments")
    public java.util.Map<String, Object> fixedIpAssignments;
    public UpdateNetworkApplianceStaticRouteRequestBody withFixedIpAssignments(java.util.Map<String, Object> fixedIpAssignments) {
        this.fixedIpAssignments = fixedIpAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayIp")
    public String gatewayIp;
    public UpdateNetworkApplianceStaticRouteRequestBody withGatewayIp(String gatewayIp) {
        this.gatewayIp = gatewayIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkApplianceStaticRouteRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRanges")
    public UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges[] reservedIpRanges;
    public UpdateNetworkApplianceStaticRouteRequestBody withReservedIpRanges(UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges[] reservedIpRanges) {
        this.reservedIpRanges = reservedIpRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnet")
    public String subnet;
    public UpdateNetworkApplianceStaticRouteRequestBody withSubnet(String subnet) {
        this.subnet = subnet;
        return this;
    }
}