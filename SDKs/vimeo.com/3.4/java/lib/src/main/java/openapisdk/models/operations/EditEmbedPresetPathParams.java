package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditEmbedPresetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preset_id")
    public Double presetId;
    public EditEmbedPresetPathParams withPresetId(Double presetId) {
        this.presetId = presetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public EditEmbedPresetPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}