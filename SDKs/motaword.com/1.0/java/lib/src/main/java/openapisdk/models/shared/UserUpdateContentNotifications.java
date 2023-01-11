package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserUpdateContentNotifications
 * Notification settings
**/
public class UserUpdateContentNotifications {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public UserUpdateContentNotifications withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sms_enabled")
    public Boolean smsEnabled;
    public UserUpdateContentNotifications withSmsEnabled(Boolean smsEnabled) {
        this.smsEnabled = smsEnabled;
        return this;
    }
}