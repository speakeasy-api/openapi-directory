package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObStandingOrder5 {
    @JsonProperty("AccountId")
    public String accountId;
    public ObStandingOrder5 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreditorAccount")
    public ObCashAccount5 creditorAccount;
    public ObStandingOrder5 withCreditorAccount(ObCashAccount5 creditorAccount) {
        this.creditorAccount = creditorAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FinalPaymentAmount")
    public ObActiveOrHistoricCurrencyAndAmount finalPaymentAmount;
    public ObStandingOrder5 withFinalPaymentAmount(ObActiveOrHistoricCurrencyAndAmount finalPaymentAmount) {
        this.finalPaymentAmount = finalPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FinalPaymentDateTime")
    public OffsetDateTime finalPaymentDateTime;
    public ObStandingOrder5 withFinalPaymentDateTime(OffsetDateTime finalPaymentDateTime) {
        this.finalPaymentDateTime = finalPaymentDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstPaymentAmount")
    public ObActiveOrHistoricCurrencyAndAmount firstPaymentAmount;
    public ObStandingOrder5 withFirstPaymentAmount(ObActiveOrHistoricCurrencyAndAmount firstPaymentAmount) {
        this.firstPaymentAmount = firstPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FirstPaymentDateTime")
    public OffsetDateTime firstPaymentDateTime;
    public ObStandingOrder5 withFirstPaymentDateTime(OffsetDateTime firstPaymentDateTime) {
        this.firstPaymentDateTime = firstPaymentDateTime;
        return this;
    }
    @JsonProperty("Frequency")
    public String frequency;
    public ObStandingOrder5 withFrequency(String frequency) {
        this.frequency = frequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastPaymentAmount")
    public ObActiveOrHistoricCurrencyAndAmount lastPaymentAmount;
    public ObStandingOrder5 withLastPaymentAmount(ObActiveOrHistoricCurrencyAndAmount lastPaymentAmount) {
        this.lastPaymentAmount = lastPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastPaymentDateTime")
    public OffsetDateTime lastPaymentDateTime;
    public ObStandingOrder5 withLastPaymentDateTime(OffsetDateTime lastPaymentDateTime) {
        this.lastPaymentDateTime = lastPaymentDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPaymentAmount")
    public ObActiveOrHistoricCurrencyAndAmount nextPaymentAmount;
    public ObStandingOrder5 withNextPaymentAmount(ObActiveOrHistoricCurrencyAndAmount nextPaymentAmount) {
        this.nextPaymentAmount = nextPaymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("NextPaymentDateTime")
    public OffsetDateTime nextPaymentDateTime;
    public ObStandingOrder5 withNextPaymentDateTime(OffsetDateTime nextPaymentDateTime) {
        this.nextPaymentDateTime = nextPaymentDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reference")
    public String reference;
    public ObStandingOrder5 withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StandingOrderId")
    public String standingOrderId;
    public ObStandingOrder5 withStandingOrderId(String standingOrderId) {
        this.standingOrderId = standingOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StandingOrderStatusCode")
    public ObExternalStandingOrderStatus1CodeEnum standingOrderStatusCode;
    public ObStandingOrder5 withStandingOrderStatusCode(ObExternalStandingOrderStatus1CodeEnum standingOrderStatusCode) {
        this.standingOrderStatusCode = standingOrderStatusCode;
        return this;
    }
}