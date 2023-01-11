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
 * EndUserAgreement
 * Represents an end-user agreement.
**/
public class EndUserAgreement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("accepted")
    public OffsetDateTime accepted;
    public EndUserAgreement withAccepted(OffsetDateTime accepted) {
        this.accepted = accepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_scope")
    public String[] accessScope;
    public EndUserAgreement withAccessScope(String[] accessScope) {
        this.accessScope = accessScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_valid_for_days")
    public Long accessValidForDays;
    public EndUserAgreement withAccessValidForDays(Long accessValidForDays) {
        this.accessValidForDays = accessValidForDays;
        return this;
    }
    @JsonProperty("aspsp_id")
    public String aspspId;
    public EndUserAgreement withAspspId(String aspspId) {
        this.aspspId = aspspId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public EndUserAgreement withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonProperty("enduser_id")
    public String enduserId;
    public EndUserAgreement withEnduserId(String enduserId) {
        this.enduserId = enduserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EndUserAgreement withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("max_historical_days")
    public Long maxHistoricalDays;
    public EndUserAgreement withMaxHistoricalDays(Long maxHistoricalDays) {
        this.maxHistoricalDays = maxHistoricalDays;
        return this;
    }
}