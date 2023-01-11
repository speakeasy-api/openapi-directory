package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("end")
    public String end;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges withStart(String start) {
        this.start = start;
        return this;
    }
}