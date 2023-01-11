package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployedDevicesKeyListDeployedDevicesKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys")
    public openapisdk.models.shared.PreviewDeployedDevicesFleetKey[] keys;
    public ListDeployedDevicesKeyListDeployedDevicesKeyResponse withKeys(openapisdk.models.shared.PreviewDeployedDevicesFleetKey[] keys) {
        this.keys = keys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta meta;
    public ListDeployedDevicesKeyListDeployedDevicesKeyResponse withMeta(ListDeployedDevicesKeyListDeployedDevicesKeyResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}