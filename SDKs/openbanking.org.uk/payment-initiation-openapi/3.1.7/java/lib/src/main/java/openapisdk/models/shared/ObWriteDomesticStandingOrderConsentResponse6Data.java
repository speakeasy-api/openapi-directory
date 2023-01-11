package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteDomesticStandingOrderConsentResponse6Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation authorisation;
    public ObWriteDomesticStandingOrderConsentResponse6Data withAuthorisation(ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteDomesticStandingOrderConsentResponse6DataCharges[] charges;
    public ObWriteDomesticStandingOrderConsentResponse6Data withCharges(ObWriteDomesticStandingOrderConsentResponse6DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteDomesticStandingOrderConsentResponse6Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteDomesticStandingOrderConsentResponse6Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CutOffDateTime")
    public OffsetDateTime cutOffDateTime;
    public ObWriteDomesticStandingOrderConsentResponse6Data withCutOffDateTime(OffsetDateTime cutOffDateTime) {
        this.cutOffDateTime = cutOffDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteDomesticStandingOrderConsentResponse6Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteDomesticStandingOrderConsentResponse6DataInitiation initiation;
    public ObWriteDomesticStandingOrderConsentResponse6Data withInitiation(ObWriteDomesticStandingOrderConsentResponse6DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonProperty("Permission")
    public ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum permission;
    public ObWriteDomesticStandingOrderConsentResponse6Data withPermission(ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadRefundAccount")
    public ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum readRefundAccount;
    public ObWriteDomesticStandingOrderConsentResponse6Data withReadRefundAccount(ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum readRefundAccount) {
        this.readRefundAccount = readRefundAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteDomesticStandingOrderConsentResponse6Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum status;
    public ObWriteDomesticStandingOrderConsentResponse6Data withStatus(ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteDomesticStandingOrderConsentResponse6Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}