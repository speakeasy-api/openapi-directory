package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteInternationalStandingOrderConsentResponse7Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation authorisation;
    public ObWriteInternationalStandingOrderConsentResponse7Data withAuthorisation(ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteInternationalStandingOrderConsentResponse7DataCharges[] charges;
    public ObWriteInternationalStandingOrderConsentResponse7Data withCharges(ObWriteInternationalStandingOrderConsentResponse7DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteInternationalStandingOrderConsentResponse7Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteInternationalStandingOrderConsentResponse7Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CutOffDateTime")
    public OffsetDateTime cutOffDateTime;
    public ObWriteInternationalStandingOrderConsentResponse7Data withCutOffDateTime(OffsetDateTime cutOffDateTime) {
        this.cutOffDateTime = cutOffDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteInternationalStandingOrderConsentResponse7Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternationalStandingOrderConsentResponse7DataInitiation initiation;
    public ObWriteInternationalStandingOrderConsentResponse7Data withInitiation(ObWriteInternationalStandingOrderConsentResponse7DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonProperty("Permission")
    public ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum permission;
    public ObWriteInternationalStandingOrderConsentResponse7Data withPermission(ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRefundAccount")
    public ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum readRefundAccount;
    public ObWriteInternationalStandingOrderConsentResponse7Data withReadRefundAccount(ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum readRefundAccount) {
        this.readRefundAccount = readRefundAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteInternationalStandingOrderConsentResponse7Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum status;
    public ObWriteInternationalStandingOrderConsentResponse7Data withStatus(ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteInternationalStandingOrderConsentResponse7Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}