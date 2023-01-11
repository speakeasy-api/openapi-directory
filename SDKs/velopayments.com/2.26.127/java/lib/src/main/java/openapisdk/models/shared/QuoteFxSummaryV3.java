package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class QuoteFxSummaryV3 {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public QuoteFxSummaryV3 withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiryTime")
    public OffsetDateTime expiryTime;
    public QuoteFxSummaryV3 withExpiryTime(OffsetDateTime expiryTime) {
        this.expiryTime = expiryTime;
        return this;
    }
    @JsonProperty("fundingStatus")
    public QuoteFxSummaryV3FundingStatusEnum fundingStatus;
    public QuoteFxSummaryV3 withFundingStatus(QuoteFxSummaryV3FundingStatusEnum fundingStatus) {
        this.fundingStatus = fundingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invertedRate")
    public Float invertedRate;
    public QuoteFxSummaryV3 withInvertedRate(Float invertedRate) {
        this.invertedRate = invertedRate;
        return this;
    }
    @JsonProperty("paymentCurrency")
    public String paymentCurrency;
    public QuoteFxSummaryV3 withPaymentCurrency(String paymentCurrency) {
        this.paymentCurrency = paymentCurrency;
        return this;
    }
    @JsonProperty("quoteId")
    public String quoteId;
    public QuoteFxSummaryV3 withQuoteId(String quoteId) {
        this.quoteId = quoteId;
        return this;
    }
    @JsonProperty("rate")
    public Float rate;
    public QuoteFxSummaryV3 withRate(Float rate) {
        this.rate = rate;
        return this;
    }
    @JsonProperty("sourceCurrency")
    public String sourceCurrency;
    public QuoteFxSummaryV3 withSourceCurrency(String sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
    @JsonProperty("status")
    public QuoteFxSummaryV3StatusEnum status;
    public QuoteFxSummaryV3 withStatus(QuoteFxSummaryV3StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("totalPaymentAmount")
    public Long totalPaymentAmount;
    public QuoteFxSummaryV3 withTotalPaymentAmount(Long totalPaymentAmount) {
        this.totalPaymentAmount = totalPaymentAmount;
        return this;
    }
    @JsonProperty("totalSourceAmount")
    public Long totalSourceAmount;
    public QuoteFxSummaryV3 withTotalSourceAmount(Long totalSourceAmount) {
        this.totalSourceAmount = totalSourceAmount;
        return this;
    }
}