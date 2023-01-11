package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployedDevicesFleetListDeployedDevicesFleetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fleets")
    public openapisdk.models.shared.PreviewDeployedDevicesFleet[] fleets;
    public ListDeployedDevicesFleetListDeployedDevicesFleetResponse withFleets(openapisdk.models.shared.PreviewDeployedDevicesFleet[] fleets) {
        this.fleets = fleets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta meta;
    public ListDeployedDevicesFleetListDeployedDevicesFleetResponse withMeta(ListDeployedDevicesFleetListDeployedDevicesFleetResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}