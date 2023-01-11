package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutVolumesIdUpdateVolumeRequestLabels
 * User-defined labels (key-value pairs)
**/
public class PutVolumesIdUpdateVolumeRequestLabels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelkey")
    public String labelkey;
    public PutVolumesIdUpdateVolumeRequestLabels withLabelkey(String labelkey) {
        this.labelkey = labelkey;
        return this;
    }
}