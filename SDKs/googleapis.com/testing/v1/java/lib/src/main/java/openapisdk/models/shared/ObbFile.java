package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObbFile
 * An opaque binary blob file to install on the device before the test starts.
**/
public class ObbFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obb")
    public FileReference obb;
    public ObbFile withObb(FileReference obb) {
        this.obb = obb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obbFileName")
    public String obbFileName;
    public ObbFile withObbFileName(String obbFileName) {
        this.obbFileName = obbFileName;
        return this;
    }
}