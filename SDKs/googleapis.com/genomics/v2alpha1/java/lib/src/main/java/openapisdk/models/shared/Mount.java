package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Mount
 * Carries information about a particular disk mount inside a container.
**/
public class Mount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disk")
    public String disk;
    public Mount withDisk(String disk) {
        this.disk = disk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public Mount withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOnly")
    public Boolean readOnly;
    public Mount withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
}