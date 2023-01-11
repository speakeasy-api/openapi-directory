package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EditorialVideoAssets
 * Asset information, including size and thumbnail URLs
**/
public class EditorialVideoAssets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original")
    public VideoSizeDetails original;
    public EditorialVideoAssets withOriginal(VideoSizeDetails original) {
        this.original = original;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_mp4")
    public VideoPreviewUrl previewMp4;
    public EditorialVideoAssets withPreviewMp4(VideoPreviewUrl previewMp4) {
        this.previewMp4 = previewMp4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_webm")
    public VideoPreviewUrl previewWebm;
    public EditorialVideoAssets withPreviewWebm(VideoPreviewUrl previewWebm) {
        this.previewWebm = previewWebm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb_jpg")
    public VideoPreviewUrl thumbJpg;
    public EditorialVideoAssets withThumbJpg(VideoPreviewUrl thumbJpg) {
        this.thumbJpg = thumbJpg;
        return this;
    }
}