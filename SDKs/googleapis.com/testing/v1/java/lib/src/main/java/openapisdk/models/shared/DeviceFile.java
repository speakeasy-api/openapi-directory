package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceFile
 * A single device file description.
**/
public class DeviceFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obbFile")
    public ObbFile obbFile;
    public DeviceFile withObbFile(ObbFile obbFile) {
        this.obbFile = obbFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regularFile")
    public RegularFile regularFile;
    public DeviceFile withRegularFile(RegularFile regularFile) {
        this.regularFile = regularFile;
        return this;
    }
}