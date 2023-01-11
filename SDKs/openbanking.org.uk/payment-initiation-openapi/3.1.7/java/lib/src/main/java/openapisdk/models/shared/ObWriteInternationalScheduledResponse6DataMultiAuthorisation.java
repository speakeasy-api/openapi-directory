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
 * ObWriteInternationalScheduledResponse6DataMultiAuthorisation
 * The multiple authorisation flow response from the ASPSP.
**/
public class ObWriteInternationalScheduledResponse6DataMultiAuthorisation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpirationDateTime")
    public OffsetDateTime expirationDateTime;
    public ObWriteInternationalScheduledResponse6DataMultiAuthorisation withExpirationDateTime(OffsetDateTime expirationDateTime) {
        this.expirationDateTime = expirationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateDateTime")
    public OffsetDateTime lastUpdateDateTime;
    public ObWriteInternationalScheduledResponse6DataMultiAuthorisation withLastUpdateDateTime(OffsetDateTime lastUpdateDateTime) {
        this.lastUpdateDateTime = lastUpdateDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberReceived")
    public Long numberReceived;
    public ObWriteInternationalScheduledResponse6DataMultiAuthorisation withNumberReceived(Long numberReceived) {
        this.numberReceived = numberReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberRequired")
    public Long numberRequired;
    public ObWriteInternationalScheduledResponse6DataMultiAuthorisation withNumberRequired(Long numberRequired) {
        this.numberRequired = numberRequired;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum status;
    public ObWriteInternationalScheduledResponse6DataMultiAuthorisation withStatus(ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum status) {
        this.status = status;
        return this;
    }
}