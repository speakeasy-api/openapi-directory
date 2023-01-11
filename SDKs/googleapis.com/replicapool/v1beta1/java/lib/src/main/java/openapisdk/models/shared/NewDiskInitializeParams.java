package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NewDiskInitializeParams
 * Initialization parameters for creating a new disk.
**/
public class NewDiskInitializeParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSizeGb")
    public String diskSizeGb;
    public NewDiskInitializeParams withDiskSizeGb(String diskSizeGb) {
        this.diskSizeGb = diskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskType")
    public String diskType;
    public NewDiskInitializeParams withDiskType(String diskType) {
        this.diskType = diskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceImage")
    public String sourceImage;
    public NewDiskInitializeParams withSourceImage(String sourceImage) {
        this.sourceImage = sourceImage;
        return this;
    }
}