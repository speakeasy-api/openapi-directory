package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayoutSummaryResponseV3 {
    @JsonProperty("acceptedPayments")
    public AcceptedPaymentV3[] acceptedPayments;
    public PayoutSummaryResponseV3 withAcceptedPayments(AcceptedPaymentV3[] acceptedPayments) {
        this.acceptedPayments = acceptedPayments;
        return this;
    }
    @JsonProperty("accounts")
    public SourceAccountV3[] accounts;
    public PayoutSummaryResponseV3 withAccounts(SourceAccountV3[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonProperty("fxSummaries")
    public QuoteFxSummaryV3[] fxSummaries;
    public PayoutSummaryResponseV3 withFxSummaries(QuoteFxSummaryV3[] fxSummaries) {
        this.fxSummaries = fxSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsAccepted")
    public Long paymentsAccepted;
    public PayoutSummaryResponseV3 withPaymentsAccepted(Long paymentsAccepted) {
        this.paymentsAccepted = paymentsAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsRejected")
    public Long paymentsRejected;
    public PayoutSummaryResponseV3 withPaymentsRejected(Long paymentsRejected) {
        this.paymentsRejected = paymentsRejected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentsSubmitted")
    public Long paymentsSubmitted;
    public PayoutSummaryResponseV3 withPaymentsSubmitted(Long paymentsSubmitted) {
        this.paymentsSubmitted = paymentsSubmitted;
        return this;
    }
    @JsonProperty("paymentsWithdrawn")
    public Long paymentsWithdrawn;
    public PayoutSummaryResponseV3 withPaymentsWithdrawn(Long paymentsWithdrawn) {
        this.paymentsWithdrawn = paymentsWithdrawn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payoutId")
    public String payoutId;
    public PayoutSummaryResponseV3 withPayoutId(String payoutId) {
        this.payoutId = payoutId;
        return this;
    }
    @JsonProperty("rejectedPayments")
    public RejectedPaymentV3[] rejectedPayments;
    public PayoutSummaryResponseV3 withRejectedPayments(RejectedPaymentV3[] rejectedPayments) {
        this.rejectedPayments = rejectedPayments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PayoutSummaryResponseV3 withStatus(String status) {
        this.status = status;
        return this;
    }
}