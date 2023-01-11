package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("end")
    public String end;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges withStart(String start) {
        this.start = start;
        return this;
    }
}