package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssistantUpdateAssistantRequest {
    @SpeakeasyMetadata("form:name=CallbackEvents")
    public String callbackEvents;
    public UpdateAssistantUpdateAssistantRequest withCallbackEvents(String callbackEvents) {
        this.callbackEvents = callbackEvents;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public UpdateAssistantUpdateAssistantRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Defaults")
    public Object defaults;
    public UpdateAssistantUpdateAssistantRequest withDefaults(Object defaults) {
        this.defaults = defaults;
        return this;
    }
    @SpeakeasyMetadata("form:name=DevelopmentStage")
    public String developmentStage;
    public UpdateAssistantUpdateAssistantRequest withDevelopmentStage(String developmentStage) {
        this.developmentStage = developmentStage;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateAssistantUpdateAssistantRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=LogQueries")
    public Boolean logQueries;
    public UpdateAssistantUpdateAssistantRequest withLogQueries(Boolean logQueries) {
        this.logQueries = logQueries;
        return this;
    }
    @SpeakeasyMetadata("form:name=StyleSheet")
    public Object styleSheet;
    public UpdateAssistantUpdateAssistantRequest withStyleSheet(Object styleSheet) {
        this.styleSheet = styleSheet;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public UpdateAssistantUpdateAssistantRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}