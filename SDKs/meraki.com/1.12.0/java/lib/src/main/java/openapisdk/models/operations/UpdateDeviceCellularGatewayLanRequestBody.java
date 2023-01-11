package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceCellularGatewayLanRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedIpAssignments")
    public UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments[] fixedIpAssignments;
    public UpdateDeviceCellularGatewayLanRequestBody withFixedIpAssignments(UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments[] fixedIpAssignments) {
        this.fixedIpAssignments = fixedIpAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRanges")
    public UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges[] reservedIpRanges;
    public UpdateDeviceCellularGatewayLanRequestBody withReservedIpRanges(UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges[] reservedIpRanges) {
        this.reservedIpRanges = reservedIpRanges;
        return this;
    }
}