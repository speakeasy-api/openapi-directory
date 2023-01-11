package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudRunRevisionInfo
 * For display only. Metadata associated with a Cloud Run revision.
**/
public class CloudRunRevisionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CloudRunRevisionInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public CloudRunRevisionInfo withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceUri")
    public String serviceUri;
    public CloudRunRevisionInfo withServiceUri(String serviceUri) {
        this.serviceUri = serviceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public CloudRunRevisionInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
}