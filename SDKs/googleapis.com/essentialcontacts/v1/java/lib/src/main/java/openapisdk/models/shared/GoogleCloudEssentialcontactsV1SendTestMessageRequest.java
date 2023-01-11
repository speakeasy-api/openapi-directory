package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudEssentialcontactsV1SendTestMessageRequest
 * Request message for the SendTestMessage method.
**/
public class GoogleCloudEssentialcontactsV1SendTestMessageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public String[] contacts;
    public GoogleCloudEssentialcontactsV1SendTestMessageRequest withContacts(String[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationCategory")
    public GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum notificationCategory;
    public GoogleCloudEssentialcontactsV1SendTestMessageRequest withNotificationCategory(GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum notificationCategory) {
        this.notificationCategory = notificationCategory;
        return this;
    }
}