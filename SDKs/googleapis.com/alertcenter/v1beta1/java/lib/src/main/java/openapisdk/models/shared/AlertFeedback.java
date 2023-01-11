package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlertFeedback
 * A customer feedback about an alert.
**/
public class AlertFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertId")
    public String alertId;
    public AlertFeedback withAlertId(String alertId) {
        this.alertId = alertId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public AlertFeedback withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public AlertFeedback withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public AlertFeedback withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedbackId")
    public String feedbackId;
    public AlertFeedback withFeedbackId(String feedbackId) {
        this.feedbackId = feedbackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AlertFeedbackTypeEnum type;
    public AlertFeedback withType(AlertFeedbackTypeEnum type) {
        this.type = type;
        return this;
    }
}