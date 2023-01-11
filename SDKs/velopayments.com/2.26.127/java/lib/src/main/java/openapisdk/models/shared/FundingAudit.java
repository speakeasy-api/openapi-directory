package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class FundingAudit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public FundingAudit withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public FundingAudit withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateTime")
    public OffsetDateTime dateTime;
    public FundingAudit withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public FundingEvent[] events;
    public FundingAudit withEvents(FundingEvent[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingAccountName")
    public String fundingAccountName;
    public FundingAudit withFundingAccountName(String fundingAccountName) {
        this.fundingAccountName = fundingAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingType")
    public FundingAuditFundingTypeEnum fundingType;
    public FundingAudit withFundingType(FundingAuditFundingTypeEnum fundingType) {
        this.fundingType = fundingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAccountName")
    public String sourceAccountName;
    public FundingAudit withSourceAccountName(String sourceAccountName) {
        this.sourceAccountName = sourceAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public FundingAuditStatusEnum status;
    public FundingAudit withStatus(FundingAuditStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topupType")
    public FundingAuditTopupTypeEnum topupType;
    public FundingAudit withTopupType(FundingAuditTopupTypeEnum topupType) {
        this.topupType = topupType;
        return this;
    }
}