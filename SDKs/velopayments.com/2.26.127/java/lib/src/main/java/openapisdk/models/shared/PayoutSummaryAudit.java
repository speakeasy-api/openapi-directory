package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PayoutSummaryAudit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateTime")
    public OffsetDateTime dateTime;
    public PayoutSummaryAudit withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fxSummaries")
    public FxSummary[] fxSummaries;
    public PayoutSummaryAudit withFxSummaries(FxSummary[] fxSummaries) {
        this.fxSummaries = fxSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instructedDateTime")
    public String instructedDateTime;
    public PayoutSummaryAudit withInstructedDateTime(String instructedDateTime) {
        this.instructedDateTime = instructedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public PayoutSummaryAudit withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonProperty("payorName")
    public String payorName;
    public PayoutSummaryAudit withPayorName(String payorName) {
        this.payorName = payorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutId")
    public String payoutId;
    public PayoutSummaryAudit withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutMemo")
    public String payoutMemo;
    public PayoutSummaryAudit withPayoutMemo(String payoutMemo) {
        this.payoutMemo = payoutMemo;
        return this;
    }
    @JsonProperty("payoutType")
    public PayoutTypeEnum payoutType;
    public PayoutSummaryAudit withPayoutType(PayoutTypeEnum payoutType) {
        this.payoutType = payoutType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAccountSummary")
    public SourceAccountSummary[] sourceAccountSummary;
    public PayoutSummaryAudit withSourceAccountSummary(SourceAccountSummary[] sourceAccountSummary) {
        this.sourceAccountSummary = sourceAccountSummary;
        return this;
    }
    @JsonProperty("status")
    public PayoutStatusEnum status;
    public PayoutSummaryAudit withStatus(PayoutStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("submittedDateTime")
    public String submittedDateTime;
    public PayoutSummaryAudit withSubmittedDateTime(String submittedDateTime) {
        this.submittedDateTime = submittedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalIncompletePayments")
    public Long totalIncompletePayments;
    public PayoutSummaryAudit withTotalIncompletePayments(Long totalIncompletePayments) {
        this.totalIncompletePayments = totalIncompletePayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPayments")
    public Long totalPayments;
    public PayoutSummaryAudit withTotalPayments(Long totalPayments) {
        this.totalPayments = totalPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalReturnedPayments")
    public Long totalReturnedPayments;
    public PayoutSummaryAudit withTotalReturnedPayments(Long totalReturnedPayments) {
        this.totalReturnedPayments = totalReturnedPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalWithdrawnPayments")
    public Long totalWithdrawnPayments;
    public PayoutSummaryAudit withTotalWithdrawnPayments(Long totalWithdrawnPayments) {
        this.totalWithdrawnPayments = totalWithdrawnPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("withdrawnDateTime")
    public OffsetDateTime withdrawnDateTime;
    public PayoutSummaryAudit withWithdrawnDateTime(OffsetDateTime withdrawnDateTime) {
        this.withdrawnDateTime = withdrawnDateTime;
        return this;
    }
}