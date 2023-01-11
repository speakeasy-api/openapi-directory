package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges {
    @JsonProperty("comment")
    public String comment;
    public UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("end")
    public String end;
    public UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonProperty("start")
    public String start;
    public UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges withStart(String start) {
        this.start = start;
        return this;
    }
}