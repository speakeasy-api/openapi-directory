package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudFunctionInfo
 * For display only. Metadata associated with a Cloud Function.
**/
public class CloudFunctionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CloudFunctionInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public CloudFunctionInfo withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public CloudFunctionInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionId")
    public String versionId;
    public CloudFunctionInfo withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}