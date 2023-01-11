package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkspaceUpdateWorkspaceRequest {
    @SpeakeasyMetadata("form:name=DefaultActivitySid")
    public String defaultActivitySid;
    public UpdateWorkspaceUpdateWorkspaceRequest withDefaultActivitySid(String defaultActivitySid) {
        this.defaultActivitySid = defaultActivitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=EventCallbackUrl")
    public String eventCallbackUrl;
    public UpdateWorkspaceUpdateWorkspaceRequest withEventCallbackUrl(String eventCallbackUrl) {
        this.eventCallbackUrl = eventCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=EventsFilter")
    public String eventsFilter;
    public UpdateWorkspaceUpdateWorkspaceRequest withEventsFilter(String eventsFilter) {
        this.eventsFilter = eventsFilter;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public UpdateWorkspaceUpdateWorkspaceRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=MultiTaskEnabled")
    public Boolean multiTaskEnabled;
    public UpdateWorkspaceUpdateWorkspaceRequest withMultiTaskEnabled(Boolean multiTaskEnabled) {
        this.multiTaskEnabled = multiTaskEnabled;
        return this;
    }
    @SpeakeasyMetadata("form:name=PrioritizeQueueOrder")
    public openapisdk.models.shared.WorkspaceEnumQueueOrderEnum prioritizeQueueOrder;
    public UpdateWorkspaceUpdateWorkspaceRequest withPrioritizeQueueOrder(openapisdk.models.shared.WorkspaceEnumQueueOrderEnum prioritizeQueueOrder) {
        this.prioritizeQueueOrder = prioritizeQueueOrder;
        return this;
    }
    @SpeakeasyMetadata("form:name=TimeoutActivitySid")
    public String timeoutActivitySid;
    public UpdateWorkspaceUpdateWorkspaceRequest withTimeoutActivitySid(String timeoutActivitySid) {
        this.timeoutActivitySid = timeoutActivitySid;
        return this;
    }
}