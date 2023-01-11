package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteDomesticScheduledResponse5Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteDomesticScheduledResponse5DataCharges[] charges;
    public ObWriteDomesticScheduledResponse5Data withCharges(ObWriteDomesticScheduledResponse5DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteDomesticScheduledResponse5Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteDomesticScheduledResponse5Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteDomesticScheduledResponse5Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonProperty("DomesticScheduledPaymentId")
    public String domesticScheduledPaymentId;
    public ObWriteDomesticScheduledResponse5Data withDomesticScheduledPaymentId(String domesticScheduledPaymentId) {
        this.domesticScheduledPaymentId = domesticScheduledPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpectedExecutionDateTime")
    public OffsetDateTime expectedExecutionDateTime;
    public ObWriteDomesticScheduledResponse5Data withExpectedExecutionDateTime(OffsetDateTime expectedExecutionDateTime) {
        this.expectedExecutionDateTime = expectedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpectedSettlementDateTime")
    public OffsetDateTime expectedSettlementDateTime;
    public ObWriteDomesticScheduledResponse5Data withExpectedSettlementDateTime(OffsetDateTime expectedSettlementDateTime) {
        this.expectedSettlementDateTime = expectedSettlementDateTime;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteDomesticScheduledResponse5DataInitiation initiation;
    public ObWriteDomesticScheduledResponse5Data withInitiation(ObWriteDomesticScheduledResponse5DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiAuthorisation")
    public ObWriteDomesticScheduledResponse5DataMultiAuthorisation multiAuthorisation;
    public ObWriteDomesticScheduledResponse5Data withMultiAuthorisation(ObWriteDomesticScheduledResponse5DataMultiAuthorisation multiAuthorisation) {
        this.multiAuthorisation = multiAuthorisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Refund")
    public ObWriteDomesticScheduledResponse5DataRefund refund;
    public ObWriteDomesticScheduledResponse5Data withRefund(ObWriteDomesticScheduledResponse5DataRefund refund) {
        this.refund = refund;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteDomesticScheduledResponse5DataStatusEnum status;
    public ObWriteDomesticScheduledResponse5Data withStatus(ObWriteDomesticScheduledResponse5DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteDomesticScheduledResponse5Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}