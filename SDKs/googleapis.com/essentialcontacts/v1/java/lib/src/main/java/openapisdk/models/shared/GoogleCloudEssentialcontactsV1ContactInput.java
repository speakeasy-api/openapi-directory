package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudEssentialcontactsV1ContactInput
 * A contact that will receive notifications from Google Cloud.
**/
public class GoogleCloudEssentialcontactsV1ContactInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GoogleCloudEssentialcontactsV1ContactInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageTag")
    public String languageTag;
    public GoogleCloudEssentialcontactsV1ContactInput withLanguageTag(String languageTag) {
        this.languageTag = languageTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationCategorySubscriptions")
    public GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[] notificationCategorySubscriptions;
    public GoogleCloudEssentialcontactsV1ContactInput withNotificationCategorySubscriptions(GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[] notificationCategorySubscriptions) {
        this.notificationCategorySubscriptions = notificationCategorySubscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validateTime")
    public String validateTime;
    public GoogleCloudEssentialcontactsV1ContactInput withValidateTime(String validateTime) {
        this.validateTime = validateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationState")
    public GoogleCloudEssentialcontactsV1ContactValidationStateEnum validationState;
    public GoogleCloudEssentialcontactsV1ContactInput withValidationState(GoogleCloudEssentialcontactsV1ContactValidationStateEnum validationState) {
        this.validationState = validationState;
        return this;
    }
}