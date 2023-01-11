package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class FxSummary {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public FxSummary withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonProperty("fundingStatus")
    public FxSummaryFundingStatusEnum fundingStatus;
    public FxSummary withFundingStatus(FxSummaryFundingStatusEnum fundingStatus) {
        this.fundingStatus = fundingStatus;
        return this;
    }
    @JsonProperty("invertedRate")
    public Double invertedRate;
    public FxSummary withInvertedRate(Double invertedRate) {
        this.invertedRate = invertedRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentCurrency")
    public PaymentAuditCurrencyEnum paymentCurrency;
    public FxSummary withPaymentCurrency(PaymentAuditCurrencyEnum paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    @JsonProperty("quoteId")
    public String quoteId;
    public FxSummary withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
    @JsonProperty("rate")
    public Double rate;
    public FxSummary withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCurrency")
    public PaymentAuditCurrencyEnum sourceCurrency;
    public FxSummary withSourceCurrency(PaymentAuditCurrencyEnum sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
    @JsonProperty("status")
    public FxSummaryStatusEnum status;
    public FxSummary withStatus(FxSummaryStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("totalCost")
    public Long totalCost;
    public FxSummary withTotalCost(Long totalCost) {
        this.totalCost = totalCost;
        return this;
    }
    @JsonProperty("totalPaymentAmount")
    public Long totalPaymentAmount;
    public FxSummary withTotalPaymentAmount(Long totalPaymentAmount) {
        this.totalPaymentAmount = totalPaymentAmount;
        return this;
    }
}