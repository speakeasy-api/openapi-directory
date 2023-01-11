package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ObWriteFileResponse3DataMultiAuthorisation
 * The multiple authorisation flow response from the ASPSP.
**/
public class ObWriteFileResponse3DataMultiAuthorisation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpirationDateTime")
    public OffsetDateTime expirationDateTime;
    public ObWriteFileResponse3DataMultiAuthorisation withExpirationDateTime(OffsetDateTime expirationDateTime) {
        this.expirationDateTime = expirationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateDateTime")
    public OffsetDateTime lastUpdateDateTime;
    public ObWriteFileResponse3DataMultiAuthorisation withLastUpdateDateTime(OffsetDateTime lastUpdateDateTime) {
        this.lastUpdateDateTime = lastUpdateDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberReceived")
    public Long numberReceived;
    public ObWriteFileResponse3DataMultiAuthorisation withNumberReceived(Long numberReceived) {
        this.numberReceived = numberReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberRequired")
    public Long numberRequired;
    public ObWriteFileResponse3DataMultiAuthorisation withNumberRequired(Long numberRequired) {
        this.numberRequired = numberRequired;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteFileResponse3DataMultiAuthorisationStatusEnum status;
    public ObWriteFileResponse3DataMultiAuthorisation withStatus(ObWriteFileResponse3DataMultiAuthorisationStatusEnum status) {
        this.status = status;
        return this;
    }
}