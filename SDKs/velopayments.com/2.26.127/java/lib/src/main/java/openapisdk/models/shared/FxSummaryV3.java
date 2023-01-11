package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class FxSummaryV3 {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public FxSummaryV3 withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonProperty("fundingStatus")
    public FxSummaryV3FundingStatusEnum fundingStatus;
    public FxSummaryV3 withFundingStatus(FxSummaryV3FundingStatusEnum fundingStatus) {
        this.fundingStatus = fundingStatus;
        return this;
    }
    @JsonProperty("invertedRate")
    public Float invertedRate;
    public FxSummaryV3 withInvertedRate(Float invertedRate) {
        this.invertedRate = invertedRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentCurrency")
    public PaymentAuditCurrencyV3Enum paymentCurrency;
    public FxSummaryV3 withPaymentCurrency(PaymentAuditCurrencyV3Enum paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    @JsonProperty("quoteId")
    public String quoteId;
    public FxSummaryV3 withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
    @JsonProperty("rate")
    public Float rate;
    public FxSummaryV3 withRate(Float rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceCurrency")
    public PaymentAuditCurrencyV3Enum sourceCurrency;
    public FxSummaryV3 withSourceCurrency(PaymentAuditCurrencyV3Enum sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
    @JsonProperty("status")
    public FxSummaryV3StatusEnum status;
    public FxSummaryV3 withStatus(FxSummaryV3StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("totalCost")
    public Long totalCost;
    public FxSummaryV3 withTotalCost(Long totalCost) {
        this.totalCost = totalCost;
        return this;
    }
    @JsonProperty("totalPaymentAmount")
    public Long totalPaymentAmount;
    public FxSummaryV3 withTotalPaymentAmount(Long totalPaymentAmount) {
        this.totalPaymentAmount = totalPaymentAmount;
        return this;
    }
}