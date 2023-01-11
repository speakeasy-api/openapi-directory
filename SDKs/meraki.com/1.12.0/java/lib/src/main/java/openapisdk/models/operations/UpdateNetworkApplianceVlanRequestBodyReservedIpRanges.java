package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkApplianceVlanRequestBodyReservedIpRanges {
    @JsonProperty("comment")
    public String comment;
    public UpdateNetworkApplianceVlanRequestBodyReservedIpRanges withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("end")
    public String end;
    public UpdateNetworkApplianceVlanRequestBodyReservedIpRanges withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public UpdateNetworkApplianceVlanRequestBodyReservedIpRanges withStart(String start) {
        this.start = start;
        return this;
    }
}