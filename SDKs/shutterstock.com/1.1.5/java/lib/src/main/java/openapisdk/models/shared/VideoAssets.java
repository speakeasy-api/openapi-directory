package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoAssets
 * Video asset information
**/
public class VideoAssets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("4k")
    public VideoSizeDetails fourk;
    public VideoAssets withFourk(VideoSizeDetails fourk) {
        this.fourk = fourk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hd")
    public VideoSizeDetails hd;
    public VideoAssets withHd(VideoSizeDetails hd) {
        this.hd = hd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_jpg")
    public Url previewJpg;
    public VideoAssets withPreviewJpg(Url previewJpg) {
        this.previewJpg = previewJpg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_mp4")
    public Url previewMp4;
    public VideoAssets withPreviewMp4(Url previewMp4) {
        this.previewMp4 = previewMp4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_webm")
    public Url previewWebm;
    public VideoAssets withPreviewWebm(Url previewWebm) {
        this.previewWebm = previewWebm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sd")
    public VideoSizeDetails sd;
    public VideoAssets withSd(VideoSizeDetails sd) {
        this.sd = sd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb_jpg")
    public Url thumbJpg;
    public VideoAssets withThumbJpg(Url thumbJpg) {
        this.thumbJpg = thumbJpg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb_jpgs")
    public Urls thumbJpgs;
    public VideoAssets withThumbJpgs(Urls thumbJpgs) {
        this.thumbJpgs = thumbJpgs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb_mp4")
    public Url thumbMp4;
    public VideoAssets withThumbMp4(Url thumbMp4) {
        this.thumbMp4 = thumbMp4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb_webm")
    public Url thumbWebm;
    public VideoAssets withThumbWebm(Url thumbWebm) {
        this.thumbWebm = thumbWebm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("web")
    public VideoSizeDetails web;
    public VideoAssets withWeb(VideoSizeDetails web) {
        this.web = web;
        return this;
    }
}