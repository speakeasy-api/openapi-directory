package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClaimNetworkDevicesRequestBody {
    @JsonProperty("serials")
    public String[] serials;
    public ClaimNetworkDevicesRequestBody withSerials(String[] serials) {
        this.serials = serials;
        return this;
    }
}