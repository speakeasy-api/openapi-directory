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
    @JsonProperty("bucketName")
    public String bucketName;
    public GcsProfile withBucketName(String bucketName) {
        this.bucketName = bucketName;
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