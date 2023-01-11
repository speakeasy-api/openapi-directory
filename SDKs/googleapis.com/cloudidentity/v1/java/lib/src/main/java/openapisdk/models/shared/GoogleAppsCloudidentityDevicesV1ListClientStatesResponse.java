package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1ListClientStatesResponse
 * Response message that is returned in ListClientStates.
**/
public class GoogleAppsCloudidentityDevicesV1ListClientStatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientStates")
    public GoogleAppsCloudidentityDevicesV1ClientState[] clientStates;
    public GoogleAppsCloudidentityDevicesV1ListClientStatesResponse withClientStates(GoogleAppsCloudidentityDevicesV1ClientState[] clientStates) {
        this.clientStates = clientStates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAppsCloudidentityDevicesV1ListClientStatesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}