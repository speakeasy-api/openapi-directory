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
 * ObWriteInternationalResponse5DataMultiAuthorisation
 * The multiple authorisation flow response from the ASPSP.
**/
public class ObWriteInternationalResponse5DataMultiAuthorisation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpirationDateTime")
    public OffsetDateTime expirationDateTime;
    public ObWriteInternationalResponse5DataMultiAuthorisation withExpirationDateTime(OffsetDateTime expirationDateTime) {
        this.expirationDateTime = expirationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateDateTime")
    public OffsetDateTime lastUpdateDateTime;
    public ObWriteInternationalResponse5DataMultiAuthorisation withLastUpdateDateTime(OffsetDateTime lastUpdateDateTime) {
        this.lastUpdateDateTime = lastUpdateDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberReceived")
    public Long numberReceived;
    public ObWriteInternationalResponse5DataMultiAuthorisation withNumberReceived(Long numberReceived) {
        this.numberReceived = numberReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberRequired")
    public Long numberRequired;
    public ObWriteInternationalResponse5DataMultiAuthorisation withNumberRequired(Long numberRequired) {
        this.numberRequired = numberRequired;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum status;
    public ObWriteInternationalResponse5DataMultiAuthorisation withStatus(ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum status) {
        this.status = status;
        return this;
    }
}