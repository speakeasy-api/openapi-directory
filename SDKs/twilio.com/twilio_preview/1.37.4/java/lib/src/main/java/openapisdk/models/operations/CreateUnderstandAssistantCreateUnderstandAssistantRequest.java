package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandAssistantCreateUnderstandAssistantRequest {
    @SpeakeasyMetadata("form:name=CallbackEvents")
    public String callbackEvents;
    public CreateUnderstandAssistantCreateUnderstandAssistantRequest withCallbackEvents(String callbackEvents) {
        this.callbackEvents = callbackEvents;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallbackUrl")
    public String callbackUrl;
    public CreateUnderstandAssistantCreateUnderstandAssistantRequest withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackActions")
    public Object fallbackActions;
    public CreateUnderstandAssistantCreateUnderstandAssistantRequest withFallbackActions(Object fallbackActions) {
        this.fallbackActions = fallbackActions;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateUnderstandAssistantCreateUnderstandAssistantRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=InitiationActions")
    public Object initiationActions;
    public CreateUnderstandAssistantCreateUnderstandAssistantRequest withInitiationActions(Object initiationActions) {
        this.initiationActions = initiationActions;
        return this;
    }
    @SpeakeasyMetadata("form:name=LogQueries")
    public Boolean logQueries;
    public CreateUnderstandAssistantCreateUnderstandAssistantRequest withLogQueries(Boolean logQueries) {
        this.logQueries = logQueries;
        return this;
    }
    @SpeakeasyMetadata("form:name=StyleSheet")
    public Object styleSheet;
    public CreateUnderstandAssistantCreateUnderstandAssistantRequest withStyleSheet(Object styleSheet) {
        this.styleSheet = styleSheet;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateUnderstandAssistantCreateUnderstandAssistantRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}