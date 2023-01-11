package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVideoEmbedPresetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preset_id")
    public Double presetId;
    public DeleteVideoEmbedPresetPathParams withPresetId(Double presetId) {
        this.presetId = presetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=video_id")
    public Double videoId;
    public DeleteVideoEmbedPresetPathParams withVideoId(Double videoId) {
        this.videoId = videoId;
        return this;
    }
}