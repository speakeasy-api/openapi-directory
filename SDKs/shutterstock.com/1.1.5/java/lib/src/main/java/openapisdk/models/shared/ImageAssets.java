package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageAssets
 * Information about the assets that are part of an image
**/
public class ImageAssets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("huge_jpg")
    public ImageSizeDetails hugeJpg;
    public ImageAssets withHugeJpg(ImageSizeDetails hugeJpg) {
        this.hugeJpg = hugeJpg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("huge_thumb")
    public Thumbnail hugeThumb;
    public ImageAssets withHugeThumb(Thumbnail hugeThumb) {
        this.hugeThumb = hugeThumb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_thumb")
    public Thumbnail largeThumb;
    public ImageAssets withLargeThumb(Thumbnail largeThumb) {
        this.largeThumb = largeThumb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium_jpg")
    public ImageSizeDetails mediumJpg;
    public ImageAssets withMediumJpg(ImageSizeDetails mediumJpg) {
        this.mediumJpg = mediumJpg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview")
    public Thumbnail preview;
    public ImageAssets withPreview(Thumbnail preview) {
        this.preview = preview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_1000")
    public Thumbnail preview1000;
    public ImageAssets withPreview1000(Thumbnail preview1000) {
        this.preview1000 = preview1000;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_1500")
    public Thumbnail preview1500;
    public ImageAssets withPreview1500(Thumbnail preview1500) {
        this.preview1500 = preview1500;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small_jpg")
    public ImageSizeDetails smallJpg;
    public ImageAssets withSmallJpg(ImageSizeDetails smallJpg) {
        this.smallJpg = smallJpg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("small_thumb")
    public Thumbnail smallThumb;
    public ImageAssets withSmallThumb(Thumbnail smallThumb) {
        this.smallThumb = smallThumb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supersize_jpg")
    public ImageSizeDetails supersizeJpg;
    public ImageAssets withSupersizeJpg(ImageSizeDetails supersizeJpg) {
        this.supersizeJpg = supersizeJpg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vector_eps")
    public ImageSizeDetails vectorEps;
    public ImageAssets withVectorEps(ImageSizeDetails vectorEps) {
        this.vectorEps = vectorEps;
        return this;
    }
}