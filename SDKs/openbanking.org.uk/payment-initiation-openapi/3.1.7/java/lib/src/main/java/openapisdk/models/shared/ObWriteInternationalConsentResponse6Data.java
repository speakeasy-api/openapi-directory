package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteInternationalConsentResponse6Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteInternationalConsentResponse6DataAuthorisation authorisation;
    public ObWriteInternationalConsentResponse6Data withAuthorisation(ObWriteInternationalConsentResponse6DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteInternationalConsentResponse6DataCharges[] charges;
    public ObWriteInternationalConsentResponse6Data withCharges(ObWriteInternationalConsentResponse6DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteInternationalConsentResponse6Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteInternationalConsentResponse6Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CutOffDateTime")
    public OffsetDateTime cutOffDateTime;
    public ObWriteInternationalConsentResponse6Data withCutOffDateTime(OffsetDateTime cutOffDateTime) {
        this.cutOffDateTime = cutOffDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteInternationalConsentResponse6Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRateInformation")
    public ObWriteInternationalConsentResponse6DataExchangeRateInformation exchangeRateInformation;
    public ObWriteInternationalConsentResponse6Data withExchangeRateInformation(ObWriteInternationalConsentResponse6DataExchangeRateInformation exchangeRateInformation) {
        this.exchangeRateInformation = exchangeRateInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpectedExecutionDateTime")
    public OffsetDateTime expectedExecutionDateTime;
    public ObWriteInternationalConsentResponse6Data withExpectedExecutionDateTime(OffsetDateTime expectedExecutionDateTime) {
        this.expectedExecutionDateTime = expectedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpectedSettlementDateTime")
    public OffsetDateTime expectedSettlementDateTime;
    public ObWriteInternationalConsentResponse6Data withExpectedSettlementDateTime(OffsetDateTime expectedSettlementDateTime) {
        this.expectedSettlementDateTime = expectedSettlementDateTime;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternationalConsentResponse6DataInitiation initiation;
    public ObWriteInternationalConsentResponse6Data withInitiation(ObWriteInternationalConsentResponse6DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRefundAccount")
    public ObWriteInternationalConsentResponse6DataReadRefundAccountEnum readRefundAccount;
    public ObWriteInternationalConsentResponse6Data withReadRefundAccount(ObWriteInternationalConsentResponse6DataReadRefundAccountEnum readRefundAccount) {
        this.readRefundAccount = readRefundAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteInternationalConsentResponse6Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteInternationalConsentResponse6DataStatusEnum status;
    public ObWriteInternationalConsentResponse6Data withStatus(ObWriteInternationalConsentResponse6DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteInternationalConsentResponse6Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}