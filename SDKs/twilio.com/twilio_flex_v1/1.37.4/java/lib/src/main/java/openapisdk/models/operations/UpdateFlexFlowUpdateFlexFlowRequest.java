package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFlexFlowUpdateFlexFlowRequest {
    @SpeakeasyMetadata("form:name=ChannelType")
    public openapisdk.models.shared.FlexFlowEnumChannelTypeEnum channelType;
    public UpdateFlexFlowUpdateFlexFlowRequest withChannelType(openapisdk.models.shared.FlexFlowEnumChannelTypeEnum channelType) {
        this.channelType = channelType;
        return this;
    }
    @SpeakeasyMetadata("form:name=ChatServiceSid")
    public String chatServiceSid;
    public UpdateFlexFlowUpdateFlexFlowRequest withChatServiceSid(String chatServiceSid) {
        this.chatServiceSid = chatServiceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=ContactIdentity")
    public String contactIdentity;
    public UpdateFlexFlowUpdateFlexFlowRequest withContactIdentity(String contactIdentity) {
        this.contactIdentity = contactIdentity;
        return this;
    }
    @SpeakeasyMetadata("form:name=Enabled")
    public Boolean enabled;
    public UpdateFlexFlowUpdateFlexFlowRequest withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateFlexFlowUpdateFlexFlowRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Integration.Channel")
    public String integrationChannel;
    public UpdateFlexFlowUpdateFlexFlowRequest withIntegrationChannel(String integrationChannel) {
        this.integrationChannel = integrationChannel;
        return this;
    }
    @SpeakeasyMetadata("form:name=Integration.CreationOnMessage")
    public Boolean integrationCreationOnMessage;
    public UpdateFlexFlowUpdateFlexFlowRequest withIntegrationCreationOnMessage(Boolean integrationCreationOnMessage) {
        this.integrationCreationOnMessage = integrationCreationOnMessage;
        return this;
    }
    @SpeakeasyMetadata("form:name=Integration.FlowSid")
    public String integrationFlowSid;
    public UpdateFlexFlowUpdateFlexFlowRequest withIntegrationFlowSid(String integrationFlowSid) {
        this.integrationFlowSid = integrationFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Integration.Priority")
    public Long integrationPriority;
    public UpdateFlexFlowUpdateFlexFlowRequest withIntegrationPriority(Long integrationPriority) {
        this.integrationPriority = integrationPriority;
        return this;
    }
    @SpeakeasyMetadata("form:name=Integration.RetryCount")
    public Long integrationRetryCount;
    public UpdateFlexFlowUpdateFlexFlowRequest withIntegrationRetryCount(Long integrationRetryCount) {
        this.integrationRetryCount = integrationRetryCount;
        return this;
    }
    @SpeakeasyMetadata("form:name=Integration.Timeout")
    public Long integrationTimeout;
    public UpdateFlexFlowUpdateFlexFlowRequest withIntegrationTimeout(Long integrationTimeout) {
        this.integrationTimeout = integrationTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=Integration.Url")
    public String integrationUrl;
    public UpdateFlexFlowUpdateFlexFlowRequest withIntegrationUrl(String integrationUrl) {
        this.integrationUrl = integrationUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Integration.WorkflowSid")
    public String integrationWorkflowSid;
    public UpdateFlexFlowUpdateFlexFlowRequest withIntegrationWorkflowSid(String integrationWorkflowSid) {
        this.integrationWorkflowSid = integrationWorkflowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Integration.WorkspaceSid")
    public String integrationWorkspaceSid;
    public UpdateFlexFlowUpdateFlexFlowRequest withIntegrationWorkspaceSid(String integrationWorkspaceSid) {
        this.integrationWorkspaceSid = integrationWorkspaceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=IntegrationType")
    public openapisdk.models.shared.FlexFlowEnumIntegrationTypeEnum integrationType;
    public UpdateFlexFlowUpdateFlexFlowRequest withIntegrationType(openapisdk.models.shared.FlexFlowEnumIntegrationTypeEnum integrationType) {
        this.integrationType = integrationType;
        return this;
    }
    @SpeakeasyMetadata("form:name=JanitorEnabled")
    public Boolean janitorEnabled;
    public UpdateFlexFlowUpdateFlexFlowRequest withJanitorEnabled(Boolean janitorEnabled) {
        this.janitorEnabled = janitorEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=LongLived")
    public Boolean longLived;
    public UpdateFlexFlowUpdateFlexFlowRequest withLongLived(Boolean longLived) {
        this.longLived = longLived;
        return this;
    }
}