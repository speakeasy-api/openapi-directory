package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceConfigurationUpdateServiceConfigurationRequest {
    @SpeakeasyMetadata("form:name=DefaultChatServiceRoleSid")
    public String defaultChatServiceRoleSid;
    public UpdateServiceConfigurationUpdateServiceConfigurationRequest withDefaultChatServiceRoleSid(String defaultChatServiceRoleSid) {
        this.defaultChatServiceRoleSid = defaultChatServiceRoleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultConversationCreatorRoleSid")
    public String defaultConversationCreatorRoleSid;
    public UpdateServiceConfigurationUpdateServiceConfigurationRequest withDefaultConversationCreatorRoleSid(String defaultConversationCreatorRoleSid) {
        this.defaultConversationCreatorRoleSid = defaultConversationCreatorRoleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DefaultConversationRoleSid")
    public String defaultConversationRoleSid;
    public UpdateServiceConfigurationUpdateServiceConfigurationRequest withDefaultConversationRoleSid(String defaultConversationRoleSid) {
        this.defaultConversationRoleSid = defaultConversationRoleSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReachabilityEnabled")
    public Boolean reachabilityEnabled;
    public UpdateServiceConfigurationUpdateServiceConfigurationRequest withReachabilityEnabled(Boolean reachabilityEnabled) {
        this.reachabilityEnabled = reachabilityEnabled;
        return this;
    }
}