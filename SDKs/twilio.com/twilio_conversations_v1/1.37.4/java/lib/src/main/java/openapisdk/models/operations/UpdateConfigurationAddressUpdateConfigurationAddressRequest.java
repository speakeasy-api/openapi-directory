package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigurationAddressUpdateConfigurationAddressRequest {
    @SpeakeasyMetadata("form:name=AutoCreation.ConversationServiceSid")
    public String autoCreationConversationServiceSid;
    public UpdateConfigurationAddressUpdateConfigurationAddressRequest withAutoCreationConversationServiceSid(String autoCreationConversationServiceSid) {
        this.autoCreationConversationServiceSid = autoCreationConversationServiceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.Enabled")
    public Boolean autoCreationEnabled;
    public UpdateConfigurationAddressUpdateConfigurationAddressRequest withAutoCreationEnabled(Boolean autoCreationEnabled) {
        this.autoCreationEnabled = autoCreationEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.StudioFlowSid")
    public String autoCreationStudioFlowSid;
    public UpdateConfigurationAddressUpdateConfigurationAddressRequest withAutoCreationStudioFlowSid(String autoCreationStudioFlowSid) {
        this.autoCreationStudioFlowSid = autoCreationStudioFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.StudioRetryCount")
    public Long autoCreationStudioRetryCount;
    public UpdateConfigurationAddressUpdateConfigurationAddressRequest withAutoCreationStudioRetryCount(Long autoCreationStudioRetryCount) {
        this.autoCreationStudioRetryCount = autoCreationStudioRetryCount;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.Type")
    public openapisdk.models.shared.ConfigurationAddressEnumAutoCreationTypeEnum autoCreationType;
    public UpdateConfigurationAddressUpdateConfigurationAddressRequest withAutoCreationType(openapisdk.models.shared.ConfigurationAddressEnumAutoCreationTypeEnum autoCreationType) {
        this.autoCreationType = autoCreationType;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.WebhookFilters")
    public String[] autoCreationWebhookFilters;
    public UpdateConfigurationAddressUpdateConfigurationAddressRequest withAutoCreationWebhookFilters(String[] autoCreationWebhookFilters) {
        this.autoCreationWebhookFilters = autoCreationWebhookFilters;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.WebhookMethod")
    public openapisdk.models.shared.ConfigurationAddressEnumMethodEnum autoCreationWebhookMethod;
    public UpdateConfigurationAddressUpdateConfigurationAddressRequest withAutoCreationWebhookMethod(openapisdk.models.shared.ConfigurationAddressEnumMethodEnum autoCreationWebhookMethod) {
        this.autoCreationWebhookMethod = autoCreationWebhookMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.WebhookUrl")
    public String autoCreationWebhookUrl;
    public UpdateConfigurationAddressUpdateConfigurationAddressRequest withAutoCreationWebhookUrl(String autoCreationWebhookUrl) {
        this.autoCreationWebhookUrl = autoCreationWebhookUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateConfigurationAddressUpdateConfigurationAddressRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}