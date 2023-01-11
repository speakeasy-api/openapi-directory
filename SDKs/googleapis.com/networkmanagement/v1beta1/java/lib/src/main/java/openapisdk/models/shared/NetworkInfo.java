package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkInfo
 * For display only. Metadata associated with a Compute Engine network.
**/
public class NetworkInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public NetworkInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchedIpRange")
    public String matchedIpRange;
    public NetworkInfo withMatchedIpRange(String matchedIpRange) {
        this.matchedIpRange = matchedIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public NetworkInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
}