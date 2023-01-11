package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Volume
 * Volume describes a volume and parameters for it to be mounted to a VM.
**/
public class Volume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceName")
    public String deviceName;
    public Volume withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcs")
    public Gcs gcs;
    public Volume withGcs(Gcs gcs) {
        this.gcs = gcs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountOptions")
    public String[] mountOptions;
    public Volume withMountOptions(String[] mountOptions) {
        this.mountOptions = mountOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mountPath")
    public String mountPath;
    public Volume withMountPath(String mountPath) {
        this.mountPath = mountPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfs")
    public Nfs nfs;
    public Volume withNfs(Nfs nfs) {
        this.nfs = nfs;
        return this;
    }
}