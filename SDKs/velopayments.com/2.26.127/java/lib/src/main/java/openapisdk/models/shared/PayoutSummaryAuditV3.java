package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayoutSummaryAuditV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fxSummaries")
    public FxSummaryV3[] fxSummaries;
    public PayoutSummaryAuditV3 withFxSummaries(FxSummaryV3[] fxSummaries) {
        this.fxSummaries = fxSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instructedDateTime")
    public String instructedDateTime;
    public PayoutSummaryAuditV3 withInstructedDateTime(String instructedDateTime) {
        this.instructedDateTime = instructedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public PayoutSummaryAuditV3 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonProperty("payoutId")
    public String payoutId;
    public PayoutSummaryAuditV3 withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutMemo")
    public String payoutMemo;
    public PayoutSummaryAuditV3 withPayoutMemo(String payoutMemo) {
        this.payoutMemo = payoutMemo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAccountSummary")
    public SourceAccountSummaryV3[] sourceAccountSummary;
    public PayoutSummaryAuditV3 withSourceAccountSummary(SourceAccountSummaryV3[] sourceAccountSummary) {
        this.sourceAccountSummary = sourceAccountSummary;
        return this;
    }
    @JsonProperty("status")
    public PayoutStatusV3Enum status;
    public PayoutSummaryAuditV3 withStatus(PayoutStatusV3Enum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("submittedDateTime")
    public String submittedDateTime;
    public PayoutSummaryAuditV3 withSubmittedDateTime(String submittedDateTime) {
        this.submittedDateTime = submittedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFailedPayments")
    public Long totalFailedPayments;
    public PayoutSummaryAuditV3 withTotalFailedPayments(Long totalFailedPayments) {
        this.totalFailedPayments = totalFailedPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalIncompletePayments")
    public Long totalIncompletePayments;
    public PayoutSummaryAuditV3 withTotalIncompletePayments(Long totalIncompletePayments) {
        this.totalIncompletePayments = totalIncompletePayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPayments")
    public Long totalPayments;
    public PayoutSummaryAuditV3 withTotalPayments(Long totalPayments) {
        this.totalPayments = totalPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withdrawnDateTime")
    public String withdrawnDateTime;
    public PayoutSummaryAuditV3 withWithdrawnDateTime(String withdrawnDateTime) {
        this.withdrawnDateTime = withdrawnDateTime;
        return this;
    }
}