package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteInternationalStandingOrderResponse7Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteInternationalStandingOrderResponse7DataCharges[] charges;
    public ObWriteInternationalStandingOrderResponse7Data withCharges(ObWriteInternationalStandingOrderResponse7DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteInternationalStandingOrderResponse7Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteInternationalStandingOrderResponse7Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteInternationalStandingOrderResponse7Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteInternationalStandingOrderResponse7DataInitiation initiation;
    public ObWriteInternationalStandingOrderResponse7Data withInitiation(ObWriteInternationalStandingOrderResponse7DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonProperty("InternationalStandingOrderId")
    public String internationalStandingOrderId;
    public ObWriteInternationalStandingOrderResponse7Data withInternationalStandingOrderId(String internationalStandingOrderId) {
        this.internationalStandingOrderId = internationalStandingOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiAuthorisation")
    public ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation multiAuthorisation;
    public ObWriteInternationalStandingOrderResponse7Data withMultiAuthorisation(ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation multiAuthorisation) {
        this.multiAuthorisation = multiAuthorisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Refund")
    public ObWriteInternationalStandingOrderResponse7DataRefund refund;
    public ObWriteInternationalStandingOrderResponse7Data withRefund(ObWriteInternationalStandingOrderResponse7DataRefund refund) {
        this.refund = refund;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteInternationalStandingOrderResponse7DataStatusEnum status;
    public ObWriteInternationalStandingOrderResponse7Data withStatus(ObWriteInternationalStandingOrderResponse7DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteInternationalStandingOrderResponse7Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}