package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class FundingEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("eventDateTime")
    public OffsetDateTime eventDateTime;
    public FundingEvent withEventDateTime(OffsetDateTime eventDateTime) {
        this.eventDateTime = eventDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public FundingEvent withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingEventType")
    public FundingEventTypeEnum fundingEventType;
    public FundingEvent withFundingEventType(FundingEventTypeEnum fundingEventType) {
        this.fundingEventType = fundingEventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public FundingEvent withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
}