package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest {
    @SpeakeasyMetadata("form:name=Rules")
    public Object rules;
    public UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest withRules(Object rules) {
        this.rules = rules;
        return this;
    }
}