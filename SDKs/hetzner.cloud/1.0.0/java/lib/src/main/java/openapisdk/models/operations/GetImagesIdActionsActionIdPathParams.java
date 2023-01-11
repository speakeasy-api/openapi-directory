package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesIdActionsActionIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=action_id")
    public Long actionId;
    public GetImagesIdActionsActionIdPathParams withActionId(Long actionId) {
        this.actionId = actionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetImagesIdActionsActionIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}