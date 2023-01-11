package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ObWritePaymentDetailsResponse1DataPaymentStatus
 * Payment status details.
**/
public class ObWritePaymentDetailsResponse1DataPaymentStatus {
    @JsonProperty("PaymentTransactionId")
    public String paymentTransactionId;
    public ObWritePaymentDetailsResponse1DataPaymentStatus withPaymentTransactionId(String paymentTransactionId) {
        this.paymentTransactionId = paymentTransactionId;
        return this;
    }
    @JsonProperty("Status")
    public ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum status;
    public ObWritePaymentDetailsResponse1DataPaymentStatus withStatus(ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusDetail")
    public ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail statusDetail;
    public ObWritePaymentDetailsResponse1DataPaymentStatus withStatusDetail(ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail statusDetail) {
        this.statusDetail = statusDetail;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWritePaymentDetailsResponse1DataPaymentStatus withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}