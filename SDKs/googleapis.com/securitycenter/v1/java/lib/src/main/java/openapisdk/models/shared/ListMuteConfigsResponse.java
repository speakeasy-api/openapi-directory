package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMuteConfigsResponse
 * Response message for listing mute configs.
**/
public class ListMuteConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("muteConfigs")
    public GoogleCloudSecuritycenterV1MuteConfig[] muteConfigs;
    public ListMuteConfigsResponse withMuteConfigs(GoogleCloudSecuritycenterV1MuteConfig[] muteConfigs) {
        this.muteConfigs = muteConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListMuteConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}