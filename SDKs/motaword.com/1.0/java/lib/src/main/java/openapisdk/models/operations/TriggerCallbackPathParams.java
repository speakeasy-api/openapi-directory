package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TriggerCallbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=actionType")
    public TriggerCallbackActionTypeEnum actionType;
    public TriggerCallbackPathParams withActionType(TriggerCallbackActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public TriggerCallbackPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}