package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteFileResponse3Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteFileResponse3DataCharges[] charges;
    public ObWriteFileResponse3Data withCharges(ObWriteFileResponse3DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteFileResponse3Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteFileResponse3Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteFileResponse3Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonProperty("FilePaymentId")
    public String filePaymentId;
    public ObWriteFileResponse3Data withFilePaymentId(String filePaymentId) {
        this.filePaymentId = filePaymentId;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteFileResponse3DataInitiation initiation;
    public ObWriteFileResponse3Data withInitiation(ObWriteFileResponse3DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MultiAuthorisation")
    public ObWriteFileResponse3DataMultiAuthorisation multiAuthorisation;
    public ObWriteFileResponse3Data withMultiAuthorisation(ObWriteFileResponse3DataMultiAuthorisation multiAuthorisation) {
        this.multiAuthorisation = multiAuthorisation;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteFileResponse3DataStatusEnum status;
    public ObWriteFileResponse3Data withStatus(ObWriteFileResponse3DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteFileResponse3Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}