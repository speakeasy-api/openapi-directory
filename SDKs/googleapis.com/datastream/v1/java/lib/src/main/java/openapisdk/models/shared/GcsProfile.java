package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GcsProfile
 * Cloud Storage bucket profile.
**/
public class GcsProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public GcsProfile withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootPath")
    public String rootPath;
    public GcsProfile withRootPath(String rootPath) {
        this.rootPath = rootPath;
        return this;
    }
}