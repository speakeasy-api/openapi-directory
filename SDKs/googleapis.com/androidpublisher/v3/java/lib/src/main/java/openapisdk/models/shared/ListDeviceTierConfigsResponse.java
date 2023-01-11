package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeviceTierConfigsResponse
 * Response listing existing device tier configs.
**/
public class ListDeviceTierConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTierConfigs")
    public DeviceTierConfig[] deviceTierConfigs;
    public ListDeviceTierConfigsResponse withDeviceTierConfigs(DeviceTierConfig[] deviceTierConfigs) {
        this.deviceTierConfigs = deviceTierConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDeviceTierConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}