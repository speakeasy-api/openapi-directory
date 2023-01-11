package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteDomesticResponse5Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteDomesticResponse5DataCharges[] charges;
    public ObWriteDomesticResponse5Data withCharges(ObWriteDomesticResponse5DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteDomesticResponse5Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteDomesticResponse5Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteDomesticResponse5Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonProperty("DomesticPaymentId")
    public String domesticPaymentId;
    public ObWriteDomesticResponse5Data withDomesticPaymentId(String domesticPaymentId) {
        this.domesticPaymentId = domesticPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpectedExecutionDateTime")
    public OffsetDateTime expectedExecutionDateTime;
    public ObWriteDomesticResponse5Data withExpectedExecutionDateTime(OffsetDateTime expectedExecutionDateTime) {
        this.expectedExecutionDateTime = expectedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpectedSettlementDateTime")
    public OffsetDateTime expectedSettlementDateTime;
    public ObWriteDomesticResponse5Data withExpectedSettlementDateTime(OffsetDateTime expectedSettlementDateTime) {
        this.expectedSettlementDateTime = expectedSettlementDateTime;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteDomesticResponse5DataInitiation initiation;
    public ObWriteDomesticResponse5Data withInitiation(ObWriteDomesticResponse5DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiAuthorisation")
    public ObWriteDomesticResponse5DataMultiAuthorisation multiAuthorisation;
    public ObWriteDomesticResponse5Data withMultiAuthorisation(ObWriteDomesticResponse5DataMultiAuthorisation multiAuthorisation) {
        this.multiAuthorisation = multiAuthorisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Refund")
    public ObWriteDomesticResponse5DataRefund refund;
    public ObWriteDomesticResponse5Data withRefund(ObWriteDomesticResponse5DataRefund refund) {
        this.refund = refund;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteDomesticResponse5DataStatusEnum status;
    public ObWriteDomesticResponse5Data withStatus(ObWriteDomesticResponse5DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteDomesticResponse5Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}