package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeMount
 * VolumeMount describes a mounting of a Volume within a container.
**/
public class VolumeMount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountPath")
    public String mountPath;
    public VolumeMount withMountPath(String mountPath) {
        this.mountPath = mountPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public VolumeMount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOnly")
    public Boolean readOnly;
    public VolumeMount withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subPath")
    public String subPath;
    public VolumeMount withSubPath(String subPath) {
        this.subPath = subPath;
        return this;
    }
}