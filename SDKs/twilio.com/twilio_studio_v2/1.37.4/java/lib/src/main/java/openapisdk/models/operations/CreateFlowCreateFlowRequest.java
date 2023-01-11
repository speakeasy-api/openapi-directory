package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFlowCreateFlowRequest {
    @SpeakeasyMetadata("form:name=CommitMessage")
    public String commitMessage;
    public CreateFlowCreateFlowRequest withCommitMessage(String commitMessage) {
        this.commitMessage = commitMessage;
        return this;
    }
    @SpeakeasyMetadata("form:name=Definition")
    public Object definition;
    public CreateFlowCreateFlowRequest withDefinition(Object definition) {
        this.definition = definition;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateFlowCreateFlowRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Status")
    public openapisdk.models.shared.FlowEnumStatusEnum status;
    public CreateFlowCreateFlowRequest withStatus(openapisdk.models.shared.FlowEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}