package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ObReadData1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpirationDateTime")
    public OffsetDateTime expirationDateTime;
    public ObReadData1 withExpirationDateTime(OffsetDateTime expirationDateTime) {
        this.expirationDateTime = expirationDateTime;
        return this;
    }
    @JsonProperty("Permissions")
    public ObExternalPermissions1CodeEnum[] permissions;
    public ObReadData1 withPermissions(ObExternalPermissions1CodeEnum[] permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TransactionFromDateTime")
    public OffsetDateTime transactionFromDateTime;
    public ObReadData1 withTransactionFromDateTime(OffsetDateTime transactionFromDateTime) {
        this.transactionFromDateTime = transactionFromDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("TransactionToDateTime")
    public OffsetDateTime transactionToDateTime;
    public ObReadData1 withTransactionToDateTime(OffsetDateTime transactionToDateTime) {
        this.transactionToDateTime = transactionToDateTime;
        return this;
    }
}