package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportDelivery
 * The report's email delivery settings.
**/
public class ReportDelivery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailOwner")
    public Boolean emailOwner;
    public ReportDelivery withEmailOwner(Boolean emailOwner) {
        this.emailOwner = emailOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailOwnerDeliveryType")
    public ReportDeliveryEmailOwnerDeliveryTypeEnum emailOwnerDeliveryType;
    public ReportDelivery withEmailOwnerDeliveryType(ReportDeliveryEmailOwnerDeliveryTypeEnum emailOwnerDeliveryType) {
        this.emailOwnerDeliveryType = emailOwnerDeliveryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ReportDelivery withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipients")
    public Recipient[] recipients;
    public ReportDelivery withRecipients(Recipient[] recipients) {
        this.recipients = recipients;
        return this;
    }
}