package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssistantCreateAssistantRequest {
    @SpeakeasyMetadata("form:name=CallbackEvents")
    public String callbackEvents;
    public CreateAssistantCreateAssistantRequest withCallbackEvents(String callbackEvents) {
        this.callbackEvents = callbackEvents;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public CreateAssistantCreateAssistantRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Defaults")
    public Object defaults;
    public CreateAssistantCreateAssistantRequest withDefaults(Object defaults) {
        this.defaults = defaults;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateAssistantCreateAssistantRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=LogQueries")
    public Boolean logQueries;
    public CreateAssistantCreateAssistantRequest withLogQueries(Boolean logQueries) {
        this.logQueries = logQueries;
        return this;
    }
    @SpeakeasyMetadata("form:name=StyleSheet")
    public Object styleSheet;
    public CreateAssistantCreateAssistantRequest withStyleSheet(Object styleSheet) {
        this.styleSheet = styleSheet;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateAssistantCreateAssistantRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}