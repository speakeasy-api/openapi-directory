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
 * ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation
 * The multiple authorisation flow response from the ASPSP.
**/
public class ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpirationDateTime")
    public OffsetDateTime expirationDateTime;
    public ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation withExpirationDateTime(OffsetDateTime expirationDateTime) {
        this.expirationDateTime = expirationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateDateTime")
    public OffsetDateTime lastUpdateDateTime;
    public ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation withLastUpdateDateTime(OffsetDateTime lastUpdateDateTime) {
        this.lastUpdateDateTime = lastUpdateDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberReceived")
    public Long numberReceived;
    public ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation withNumberReceived(Long numberReceived) {
        this.numberReceived = numberReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberRequired")
    public Long numberRequired;
    public ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation withNumberRequired(Long numberRequired) {
        this.numberRequired = numberRequired;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum status;
    public ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation withStatus(ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum status) {
        this.status = status;
        return this;
    }
}