package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest {
    @SpeakeasyMetadata("form:name=Rules")
    public Object rules;
    public UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest withRules(Object rules) {
        this.rules = rules;
        return this;
    }
}