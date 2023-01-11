package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges {
    @JsonProperty("comment")
    public String comment;
    public UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("end")
    public String end;
    public UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges withStart(String start) {
        this.start = start;
        return this;
    }
}