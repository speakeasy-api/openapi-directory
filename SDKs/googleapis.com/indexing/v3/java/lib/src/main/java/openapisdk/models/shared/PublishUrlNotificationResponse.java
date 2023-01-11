package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublishUrlNotificationResponse
 * Output for PublishUrlNotification
**/
public class PublishUrlNotificationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlNotificationMetadata")
    public UrlNotificationMetadata urlNotificationMetadata;
    public PublishUrlNotificationResponse withUrlNotificationMetadata(UrlNotificationMetadata urlNotificationMetadata) {
        this.urlNotificationMetadata = urlNotificationMetadata;
        return this;
    }
}