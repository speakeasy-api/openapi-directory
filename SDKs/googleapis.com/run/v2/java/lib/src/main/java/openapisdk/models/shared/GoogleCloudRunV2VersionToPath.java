package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2VersionToPath
 * VersionToPath maps a specific version of a secret to a relative file to mount to, relative to VolumeMount's mount_path.
**/
public class GoogleCloudRunV2VersionToPath {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public Integer mode;
    public GoogleCloudRunV2VersionToPath withMode(Integer mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public GoogleCloudRunV2VersionToPath withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public GoogleCloudRunV2VersionToPath withVersion(String version) {
        this.version = version;
        return this;
    }
}