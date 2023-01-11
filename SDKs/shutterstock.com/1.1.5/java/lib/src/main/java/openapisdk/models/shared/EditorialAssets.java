package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditorialAssets
 * Asset information, including size and thumbnail URLs
**/
public class EditorialAssets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium_jpg")
    public ImageSizeDetails mediumJpg;
    public EditorialAssets withMediumJpg(ImageSizeDetails mediumJpg) {
        this.mediumJpg = mediumJpg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original")
    public ImageSizeDetails original;
    public EditorialAssets withOriginal(ImageSizeDetails original) {
        this.original = original;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small_jpg")
    public ImageSizeDetails smallJpg;
    public EditorialAssets withSmallJpg(ImageSizeDetails smallJpg) {
        this.smallJpg = smallJpg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb_170")
    public Thumbnail thumb170;
    public EditorialAssets withThumb170(Thumbnail thumb170) {
        this.thumb170 = thumb170;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb_220")
    public Thumbnail thumb220;
    public EditorialAssets withThumb220(Thumbnail thumb220) {
        this.thumb220 = thumb220;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watermark_1500")
    public Thumbnail watermark1500;
    public EditorialAssets withWatermark1500(Thumbnail watermark1500) {
        this.watermark1500 = watermark1500;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watermark_450")
    public Thumbnail watermark450;
    public EditorialAssets withWatermark450(Thumbnail watermark450) {
        this.watermark450 = watermark450;
        return this;
    }
}