package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2VolumeMount
 * VolumeMount describes a mounting of a Volume within a container.
**/
public class GoogleCloudRunV2VolumeMount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountPath")
    public String mountPath;
    public GoogleCloudRunV2VolumeMount withMountPath(String mountPath) {
        this.mountPath = mountPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2VolumeMount withName(String name) {
        this.name = name;
        return this;
    }
}