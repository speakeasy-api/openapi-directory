package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeVolumeInfoReadingModes
 * The reading modes available for this volume.
**/
public class VolumeVolumeInfoReadingModes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Boolean image;
    public VolumeVolumeInfoReadingModes withImage(Boolean image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public Boolean text;
    public VolumeVolumeInfoReadingModes withText(Boolean text) {
        this.text = text;
        return this;
    }
}