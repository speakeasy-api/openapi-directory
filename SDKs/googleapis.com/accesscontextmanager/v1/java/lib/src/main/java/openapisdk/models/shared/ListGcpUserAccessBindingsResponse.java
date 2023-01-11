package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGcpUserAccessBindingsResponse
 * Response of ListGcpUserAccessBindings.
**/
public class ListGcpUserAccessBindingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcpUserAccessBindings")
    public GcpUserAccessBinding[] gcpUserAccessBindings;
    public ListGcpUserAccessBindingsResponse withGcpUserAccessBindings(GcpUserAccessBinding[] gcpUserAccessBindings) {
        this.gcpUserAccessBindings = gcpUserAccessBindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGcpUserAccessBindingsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}