package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConfigurationAddressCreateConfigurationAddressRequest {
    @SpeakeasyMetadata("form:name=Address")
    public String address;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.ConversationServiceSid")
    public String autoCreationConversationServiceSid;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withAutoCreationConversationServiceSid(String autoCreationConversationServiceSid) {
        this.autoCreationConversationServiceSid = autoCreationConversationServiceSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.Enabled")
    public Boolean autoCreationEnabled;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withAutoCreationEnabled(Boolean autoCreationEnabled) {
        this.autoCreationEnabled = autoCreationEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.StudioFlowSid")
    public String autoCreationStudioFlowSid;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withAutoCreationStudioFlowSid(String autoCreationStudioFlowSid) {
        this.autoCreationStudioFlowSid = autoCreationStudioFlowSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.StudioRetryCount")
    public Long autoCreationStudioRetryCount;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withAutoCreationStudioRetryCount(Long autoCreationStudioRetryCount) {
        this.autoCreationStudioRetryCount = autoCreationStudioRetryCount;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.Type")
    public openapisdk.models.shared.ConfigurationAddressEnumAutoCreationTypeEnum autoCreationType;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withAutoCreationType(openapisdk.models.shared.ConfigurationAddressEnumAutoCreationTypeEnum autoCreationType) {
        this.autoCreationType = autoCreationType;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.WebhookFilters")
    public String[] autoCreationWebhookFilters;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withAutoCreationWebhookFilters(String[] autoCreationWebhookFilters) {
        this.autoCreationWebhookFilters = autoCreationWebhookFilters;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.WebhookMethod")
    public openapisdk.models.shared.ConfigurationAddressEnumMethodEnum autoCreationWebhookMethod;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withAutoCreationWebhookMethod(openapisdk.models.shared.ConfigurationAddressEnumMethodEnum autoCreationWebhookMethod) {
        this.autoCreationWebhookMethod = autoCreationWebhookMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=AutoCreation.WebhookUrl")
    public String autoCreationWebhookUrl;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withAutoCreationWebhookUrl(String autoCreationWebhookUrl) {
        this.autoCreationWebhookUrl = autoCreationWebhookUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.ConfigurationAddressEnumTypeEnum type;
    public CreateConfigurationAddressCreateConfigurationAddressRequest withType(openapisdk.models.shared.ConfigurationAddressEnumTypeEnum type) {
        this.type = type;
        return this;
    }
}