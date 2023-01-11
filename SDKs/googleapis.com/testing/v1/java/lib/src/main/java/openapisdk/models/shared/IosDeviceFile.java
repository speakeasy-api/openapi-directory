package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosDeviceFile
 * A file or directory to install on the device before the test starts.
**/
public class IosDeviceFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public IosDeviceFile withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public FileReference content;
    public IosDeviceFile withContent(FileReference content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePath")
    public String devicePath;
    public IosDeviceFile withDevicePath(String devicePath) {
        this.devicePath = devicePath;
        return this;
    }
}