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
 * ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation
 * The multiple authorisation flow response from the ASPSP.
**/
public class ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpirationDateTime")
    public OffsetDateTime expirationDateTime;
    public ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation withExpirationDateTime(OffsetDateTime expirationDateTime) {
        this.expirationDateTime = expirationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateDateTime")
    public OffsetDateTime lastUpdateDateTime;
    public ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation withLastUpdateDateTime(OffsetDateTime lastUpdateDateTime) {
        this.lastUpdateDateTime = lastUpdateDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberReceived")
    public Long numberReceived;
    public ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation withNumberReceived(Long numberReceived) {
        this.numberReceived = numberReceived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberRequired")
    public Long numberRequired;
    public ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation withNumberRequired(Long numberRequired) {
        this.numberRequired = numberRequired;
        return this;
    }
    @JsonProperty("Status")
    public ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum status;
    public ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation withStatus(ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum status) {
        this.status = status;
        return this;
    }
}