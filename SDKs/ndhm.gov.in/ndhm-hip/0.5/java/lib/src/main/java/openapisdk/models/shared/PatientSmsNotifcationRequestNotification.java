package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientSmsNotifcationRequestNotification {
    @JsonProperty("careContextInfo")
    public String careContextInfo;
    public PatientSmsNotifcationRequestNotification withCareContextInfo(String careContextInfo) {
        this.careContextInfo = careContextInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deeplinkUrl")
    public String deeplinkUrl;
    public PatientSmsNotifcationRequestNotification withDeeplinkUrl(String deeplinkUrl) {
        this.deeplinkUrl = deeplinkUrl;
        return this;
    }
    @JsonProperty("hip")
    public PatientSmsNotifcationRequestNotificationHip hip;
    public PatientSmsNotifcationRequestNotification withHip(PatientSmsNotifcationRequestNotificationHip hip) {
        this.hip = hip;
        return this;
    }
    @JsonProperty("phoneNo")
    public String phoneNo;
    public PatientSmsNotifcationRequestNotification withPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receiverName")
    public String receiverName;
    public PatientSmsNotifcationRequestNotification withReceiverName(String receiverName) {
        this.receiverName = receiverName;
        return this;
    }
}