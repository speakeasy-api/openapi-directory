package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteDomesticStandingOrderResponse6Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteDomesticStandingOrderResponse6DataCharges[] charges;
    public ObWriteDomesticStandingOrderResponse6Data withCharges(ObWriteDomesticStandingOrderResponse6DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteDomesticStandingOrderResponse6Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteDomesticStandingOrderResponse6Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteDomesticStandingOrderResponse6Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonProperty("DomesticStandingOrderId")
    public String domesticStandingOrderId;
    public ObWriteDomesticStandingOrderResponse6Data withDomesticStandingOrderId(String domesticStandingOrderId) {
        this.domesticStandingOrderId = domesticStandingOrderId;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteDomesticStandingOrderResponse6DataInitiation initiation;
    public ObWriteDomesticStandingOrderResponse6Data withInitiation(ObWriteDomesticStandingOrderResponse6DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiAuthorisation")
    public ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation multiAuthorisation;
    public ObWriteDomesticStandingOrderResponse6Data withMultiAuthorisation(ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation multiAuthorisation) {
        this.multiAuthorisation = multiAuthorisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Refund")
    public ObWriteDomesticStandingOrderResponse6DataRefund refund;
    public ObWriteDomesticStandingOrderResponse6Data withRefund(ObWriteDomesticStandingOrderResponse6DataRefund refund) {
        this.refund = refund;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteDomesticStandingOrderResponse6DataStatusEnum status;
    public ObWriteDomesticStandingOrderResponse6Data withStatus(ObWriteDomesticStandingOrderResponse6DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteDomesticStandingOrderResponse6Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}