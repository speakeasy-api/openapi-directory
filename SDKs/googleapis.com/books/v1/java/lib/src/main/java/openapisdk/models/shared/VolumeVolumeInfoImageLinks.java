package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeVolumeInfoImageLinks
 * A list of image links for all the sizes that are available. (In LITE projection.)
**/
public class VolumeVolumeInfoImageLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraLarge")
    public String extraLarge;
    public VolumeVolumeInfoImageLinks withExtraLarge(String extraLarge) {
        this.extraLarge = extraLarge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large")
    public String large;
    public VolumeVolumeInfoImageLinks withLarge(String large) {
        this.large = large;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public String medium;
    public VolumeVolumeInfoImageLinks withMedium(String medium) {
        this.medium = medium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small")
    public String small;
    public VolumeVolumeInfoImageLinks withSmall(String small) {
        this.small = small;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smallThumbnail")
    public String smallThumbnail;
    public VolumeVolumeInfoImageLinks withSmallThumbnail(String smallThumbnail) {
        this.smallThumbnail = smallThumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public VolumeVolumeInfoImageLinks withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
}