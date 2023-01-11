package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNotificationConfigsResponse
 * Response message for listing notification configs.
**/
public class ListNotificationConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListNotificationConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationConfigs")
    public NotificationConfig[] notificationConfigs;
    public ListNotificationConfigsResponse withNotificationConfigs(NotificationConfig[] notificationConfigs) {
        this.notificationConfigs = notificationConfigs;
        return this;
    }
}