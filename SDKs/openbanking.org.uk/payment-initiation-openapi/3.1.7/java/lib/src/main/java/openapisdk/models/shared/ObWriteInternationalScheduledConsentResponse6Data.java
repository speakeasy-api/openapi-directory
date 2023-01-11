package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteInternationalScheduledConsentResponse6Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteInternationalScheduledConsentResponse6DataAuthorisation authorisation;
    public ObWriteInternationalScheduledConsentResponse6Data withAuthorisation(ObWriteInternationalScheduledConsentResponse6DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteInternationalScheduledConsentResponse6DataCharges[] charges;
    public ObWriteInternationalScheduledConsentResponse6Data withCharges(ObWriteInternationalScheduledConsentResponse6DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteInternationalScheduledConsentResponse6Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteInternationalScheduledConsentResponse6Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CutOffDateTime")
    public OffsetDateTime cutOffDateTime;
    public ObWriteInternationalScheduledConsentResponse6Data withCutOffDateTime(OffsetDateTime cutOffDateTime) {
        this.cutOffDateTime = cutOffDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteInternationalScheduledConsentResponse6Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRateInformation")
    public ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation exchangeRateInformation;
    public ObWriteInternationalScheduledConsentResponse6Data withExchangeRateInformation(ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation exchangeRateInformation) {
        this.exchangeRateInformation = exchangeRateInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpectedExecutionDateTime")
    public OffsetDateTime expectedExecutionDateTime;
    public ObWriteInternationalScheduledConsentResponse6Data withExpectedExecutionDateTime(OffsetDateTime expectedExecutionDateTime) {
        this.expectedExecutionDateTime = expectedExecutionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpectedSettlementDateTime")
    public OffsetDateTime expectedSettlementDateTime;
    public ObWriteInternationalScheduledConsentResponse6Data withExpectedSettlementDateTime(OffsetDateTime expectedSettlementDateTime) {
        this.expectedSettlementDateTime = expectedSettlementDateTime;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternationalScheduledConsentResponse6DataInitiation initiation;
    public ObWriteInternationalScheduledConsentResponse6Data withInitiation(ObWriteInternationalScheduledConsentResponse6DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonProperty("Permission")
    public ObWriteInternationalScheduledConsentResponse6DataPermissionEnum permission;
    public ObWriteInternationalScheduledConsentResponse6Data withPermission(ObWriteInternationalScheduledConsentResponse6DataPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRefundAccount")
    public ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum readRefundAccount;
    public ObWriteInternationalScheduledConsentResponse6Data withReadRefundAccount(ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum readRefundAccount) {
        this.readRefundAccount = readRefundAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteInternationalScheduledConsentResponse6Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteInternationalScheduledConsentResponse6DataStatusEnum status;
    public ObWriteInternationalScheduledConsentResponse6Data withStatus(ObWriteInternationalScheduledConsentResponse6DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteInternationalScheduledConsentResponse6Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}