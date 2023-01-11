package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AccessTokenValidity {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("expiry")
    public OffsetDateTime expiry;
    public AccessTokenValidity withExpiry(OffsetDateTime expiry) {
        this.expiry = expiry;
        return this;
    }
    @JsonProperty("limit")
    public Long limit;
    public AccessTokenValidity withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonProperty("purpose")
    public PatientAuthPurposeEnum purpose;
    public AccessTokenValidity withPurpose(PatientAuthPurposeEnum purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonProperty("requester")
    public PatientAuthRequester requester;
    public AccessTokenValidity withRequester(PatientAuthRequester requester) {
        this.requester = requester;
        return this;
    }
}