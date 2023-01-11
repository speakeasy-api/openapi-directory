package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmbedPresetVideosAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preset_id")
    public Double presetId;
    public GetEmbedPresetVideosAlt1PathParams withPresetId(Double presetId) {
        this.presetId = presetId;
        return this;
    }
}