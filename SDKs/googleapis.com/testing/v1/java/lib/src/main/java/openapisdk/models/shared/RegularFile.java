package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegularFile
 * A file or directory to install on the device before the test starts.
**/
public class RegularFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public FileReference content;
    public RegularFile withContent(FileReference content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePath")
    public String devicePath;
    public RegularFile withDevicePath(String devicePath) {
        this.devicePath = devicePath;
        return this;
    }
}