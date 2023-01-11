package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BadgeExpiry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationDate")
    public OffsetDateTime expirationDate;
    public BadgeExpiry withExpirationDate(OffsetDateTime expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires")
    public Boolean expires;
    public BadgeExpiry withExpires(Boolean expires) {
        this.expires = expires;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryType")
    public BadgeExpiryExpiryTypeEnum expiryType;
    public BadgeExpiry withExpiryType(BadgeExpiryExpiryTypeEnum expiryType) {
        this.expiryType = expiryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeframeAmount")
    public Double timeframeAmount;
    public BadgeExpiry withTimeframeAmount(Double timeframeAmount) {
        this.timeframeAmount = timeframeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeframeUnit")
    public BadgeExpiryTimeframeUnitEnum timeframeUnit;
    public BadgeExpiry withTimeframeUnit(BadgeExpiryTimeframeUnitEnum timeframeUnit) {
        this.timeframeUnit = timeframeUnit;
        return this;
    }
}