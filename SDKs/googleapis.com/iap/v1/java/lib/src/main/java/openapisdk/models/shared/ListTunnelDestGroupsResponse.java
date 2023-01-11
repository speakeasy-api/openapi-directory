package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTunnelDestGroupsResponse
 * The response from ListTunnelDestGroups.
**/
public class ListTunnelDestGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTunnelDestGroupsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tunnelDestGroups")
    public TunnelDestGroup[] tunnelDestGroups;
    public ListTunnelDestGroupsResponse withTunnelDestGroups(TunnelDestGroup[] tunnelDestGroups) {
        this.tunnelDestGroups = tunnelDestGroups;
        return this;
    }
}