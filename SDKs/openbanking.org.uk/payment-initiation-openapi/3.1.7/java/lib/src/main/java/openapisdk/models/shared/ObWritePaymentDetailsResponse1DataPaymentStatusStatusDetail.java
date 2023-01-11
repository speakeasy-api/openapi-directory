package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail
 * Payment status details as per underlying Payment Rail.
**/
public class ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocalInstrument")
    public String localInstrument;
    public ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail withLocalInstrument(String localInstrument) {
        this.localInstrument = localInstrument;
        return this;
    }
    @JsonProperty("Status")
    public String status;
    public ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReason")
    public ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum statusReason;
    public ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail withStatusReason(ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusReasonDescription")
    public String statusReasonDescription;
    public ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail withStatusReasonDescription(String statusReasonDescription) {
        this.statusReasonDescription = statusReasonDescription;
        return this;
    }
}