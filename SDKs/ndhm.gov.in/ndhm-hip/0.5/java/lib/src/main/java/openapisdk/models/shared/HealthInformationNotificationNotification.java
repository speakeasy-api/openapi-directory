package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class HealthInformationNotificationNotification {
    @JsonProperty("consentId")
    public String consentId;
    public HealthInformationNotificationNotification withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("doneAt")
    public OffsetDateTime doneAt;
    public HealthInformationNotificationNotification withDoneAt(OffsetDateTime doneAt) {
        this.doneAt = doneAt;
        return this;
    }
    @JsonProperty("notifier")
    public HealthInformationNotificationNotificationNotifier notifier;
    public HealthInformationNotificationNotification withNotifier(HealthInformationNotificationNotificationNotifier notifier) {
        this.notifier = notifier;
        return this;
    }
    @JsonProperty("statusNotification")
    public HealthInformationNotificationNotificationStatusNotification statusNotification;
    public HealthInformationNotificationNotification withStatusNotification(HealthInformationNotificationNotificationStatusNotification statusNotification) {
        this.statusNotification = statusNotification;
        return this;
    }
    @JsonProperty("transactionId")
    public String transactionId;
    public HealthInformationNotificationNotification withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}