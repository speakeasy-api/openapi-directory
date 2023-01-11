package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteInternationalScheduledResponse6Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteInternationalScheduledResponse6DataCharges[] charges;
    public ObWriteInternationalScheduledResponse6Data withCharges(ObWriteInternationalScheduledResponse6DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteInternationalScheduledResponse6Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteInternationalScheduledResponse6Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteInternationalScheduledResponse6Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRateInformation")
    public ObWriteInternationalScheduledResponse6DataExchangeRateInformation exchangeRateInformation;
    public ObWriteInternationalScheduledResponse6Data withExchangeRateInformation(ObWriteInternationalScheduledResponse6DataExchangeRateInformation exchangeRateInformation) {
        this.exchangeRateInformation = exchangeRateInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpectedExecutionDateTime")
    public OffsetDateTime expectedExecutionDateTime;
    public ObWriteInternationalScheduledResponse6Data withExpectedExecutionDateTime(OffsetDateTime expectedExecutionDateTime) {
        this.expectedExecutionDateTime = expectedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpectedSettlementDateTime")
    public OffsetDateTime expectedSettlementDateTime;
    public ObWriteInternationalScheduledResponse6Data withExpectedSettlementDateTime(OffsetDateTime expectedSettlementDateTime) {
        this.expectedSettlementDateTime = expectedSettlementDateTime;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternationalScheduledResponse6DataInitiation initiation;
    public ObWriteInternationalScheduledResponse6Data withInitiation(ObWriteInternationalScheduledResponse6DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonProperty("InternationalScheduledPaymentId")
    public String internationalScheduledPaymentId;
    public ObWriteInternationalScheduledResponse6Data withInternationalScheduledPaymentId(String internationalScheduledPaymentId) {
        this.internationalScheduledPaymentId = internationalScheduledPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiAuthorisation")
    public ObWriteInternationalScheduledResponse6DataMultiAuthorisation multiAuthorisation;
    public ObWriteInternationalScheduledResponse6Data withMultiAuthorisation(ObWriteInternationalScheduledResponse6DataMultiAuthorisation multiAuthorisation) {
        this.multiAuthorisation = multiAuthorisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Refund")
    public ObWriteInternationalScheduledResponse6DataRefund refund;
    public ObWriteInternationalScheduledResponse6Data withRefund(ObWriteInternationalScheduledResponse6DataRefund refund) {
        this.refund = refund;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteInternationalScheduledResponse6DataStatusEnum status;
    public ObWriteInternationalScheduledResponse6Data withStatus(ObWriteInternationalScheduledResponse6DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteInternationalScheduledResponse6Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}