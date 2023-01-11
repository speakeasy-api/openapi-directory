package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObReadDataConsentResponse1 {
    @JsonProperty("ConsentId")
    public String consentId;
    public ObReadDataConsentResponse1 withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationDateTime")
    public OffsetDateTime creationDateTime;
    public ObReadDataConsentResponse1 withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpirationDateTime")
    public OffsetDateTime expirationDateTime;
    public ObReadDataConsentResponse1 withExpirationDateTime(OffsetDateTime expirationDateTime) {
        this.expirationDateTime = expirationDateTime;
        return this;
    }
    @JsonProperty("Permissions")
    public ObExternalPermissions1CodeEnum[] permissions;
    public ObReadDataConsentResponse1 withPermissions(ObExternalPermissions1CodeEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("Status")
    public ObExternalRequestStatus1CodeEnum status;
    public ObReadDataConsentResponse1 withStatus(ObExternalRequestStatus1CodeEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StatusUpdateDateTime")
    public OffsetDateTime statusUpdateDateTime;
    public ObReadDataConsentResponse1 withStatusUpdateDateTime(OffsetDateTime statusUpdateDateTime) {
        this.statusUpdateDateTime = statusUpdateDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TransactionFromDateTime")
    public OffsetDateTime transactionFromDateTime;
    public ObReadDataConsentResponse1 withTransactionFromDateTime(OffsetDateTime transactionFromDateTime) {
        this.transactionFromDateTime = transactionFromDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TransactionToDateTime")
    public OffsetDateTime transactionToDateTime;
    public ObReadDataConsentResponse1 withTransactionToDateTime(OffsetDateTime transactionToDateTime) {
        this.transactionToDateTime = transactionToDateTime;
        return this;
    }
}