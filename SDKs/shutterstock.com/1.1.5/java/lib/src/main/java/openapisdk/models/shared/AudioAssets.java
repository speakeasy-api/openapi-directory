package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudioAssets
 * Files that are available as part of an audio asset
**/
public class AudioAssets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("album_art")
    public AudioAssetDetails albumArt;
    public AudioAssets withAlbumArt(AudioAssetDetails albumArt) {
        this.albumArt = albumArt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clean_audio")
    public AudioAssetDetails cleanAudio;
    public AudioAssets withCleanAudio(AudioAssetDetails cleanAudio) {
        this.cleanAudio = cleanAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_audio")
    public AudioAssetDetails originalAudio;
    public AudioAssets withOriginalAudio(AudioAssetDetails originalAudio) {
        this.originalAudio = originalAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_mp3")
    public AudioAssetDetails previewMp3;
    public AudioAssets withPreviewMp3(AudioAssetDetails previewMp3) {
        this.previewMp3 = previewMp3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_ogg")
    public AudioAssetDetails previewOgg;
    public AudioAssets withPreviewOgg(AudioAssetDetails previewOgg) {
        this.previewOgg = previewOgg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waveform")
    public AudioAssetDetails waveform;
    public AudioAssets withWaveform(AudioAssetDetails waveform) {
        this.waveform = waveform;
        return this;
    }
}