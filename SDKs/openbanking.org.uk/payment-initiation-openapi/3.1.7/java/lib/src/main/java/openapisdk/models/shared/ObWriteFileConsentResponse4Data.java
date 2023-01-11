package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObWriteFileConsentResponse4Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Authorisation")
    public ObWriteFileConsentResponse4DataAuthorisation authorisation;
    public ObWriteFileConsentResponse4Data withAuthorisation(ObWriteFileConsentResponse4DataAuthorisation authorisation) {
        this.authorisation = authorisation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charges")
    public ObWriteFileConsentResponse4DataCharges[] charges;
    public ObWriteFileConsentResponse4Data withCharges(ObWriteFileConsentResponse4DataCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonProperty("ConsentId")
    public String consentId;
    public ObWriteFileConsentResponse4Data withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObWriteFileConsentResponse4Data withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CutOffDateTime")
    public OffsetDateTime cutOffDateTime;
    public ObWriteFileConsentResponse4Data withCutOffDateTime(OffsetDateTime cutOffDateTime) {
        this.cutOffDateTime = cutOffDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Debtor")
    public ObCashAccountDebtor4 debtor;
    public ObWriteFileConsentResponse4Data withDebtor(ObCashAccountDebtor4 debtor) {
        this.debtor = debtor;
        return this;
    }
    @JsonProperty("Initiation")
    public ObWriteFileConsentResponse4DataInitiation initiation;
    public ObWriteFileConsentResponse4Data withInitiation(ObWriteFileConsentResponse4DataInitiation initiation) {
        this.initiation = initiation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SCASupportData")
    public ObscaSupportData1 scaSupportData;
    public ObWriteFileConsentResponse4Data withScaSupportData(ObscaSupportData1 scaSupportData) {
        this.scaSupportData = scaSupportData;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteFileConsentResponse4DataStatusEnum status;
    public ObWriteFileConsentResponse4Data withStatus(ObWriteFileConsentResponse4DataStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObWriteFileConsentResponse4Data withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
}