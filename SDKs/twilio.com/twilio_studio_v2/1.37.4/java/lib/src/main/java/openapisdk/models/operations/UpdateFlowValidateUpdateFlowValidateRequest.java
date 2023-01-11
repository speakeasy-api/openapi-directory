package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFlowValidateUpdateFlowValidateRequest {
    @SpeakeasyMetadata("form:name=CommitMessage")
    public String commitMessage;
    public UpdateFlowValidateUpdateFlowValidateRequest withCommitMessage(String commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    @SpeakeasyMetadata("form:name=Definition")
    public Object definition;
    public UpdateFlowValidateUpdateFlowValidateRequest withDefinition(Object definition) {
        this.definition = definition;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateFlowValidateUpdateFlowValidateRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.FlowValidateEnumStatusEnum status;
    public UpdateFlowValidateUpdateFlowValidateRequest withStatus(openapisdk.models.shared.FlowValidateEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}