package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkspaceCreateWorkspaceRequest {
    @SpeakeasyMetadata("form:name=EventCallbackUrl")
    public String eventCallbackUrl;
    public CreateWorkspaceCreateWorkspaceRequest withEventCallbackUrl(String eventCallbackUrl) {
        this.eventCallbackUrl = eventCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=EventsFilter")
    public String eventsFilter;
    public CreateWorkspaceCreateWorkspaceRequest withEventsFilter(String eventsFilter) {
        this.eventsFilter = eventsFilter;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateWorkspaceCreateWorkspaceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MultiTaskEnabled")
    public Boolean multiTaskEnabled;
    public CreateWorkspaceCreateWorkspaceRequest withMultiTaskEnabled(Boolean multiTaskEnabled) {
        this.multiTaskEnabled = multiTaskEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=PrioritizeQueueOrder")
    public openapisdk.models.shared.WorkspaceEnumQueueOrderEnum prioritizeQueueOrder;
    public CreateWorkspaceCreateWorkspaceRequest withPrioritizeQueueOrder(openapisdk.models.shared.WorkspaceEnumQueueOrderEnum prioritizeQueueOrder) {
        this.prioritizeQueueOrder = prioritizeQueueOrder;
        return this;
    }
    @SpeakeasyMetadata("form:name=Template")
    public String template;
    public CreateWorkspaceCreateWorkspaceRequest withTemplate(String template) {
        this.template = template;
        return this;
    }
}