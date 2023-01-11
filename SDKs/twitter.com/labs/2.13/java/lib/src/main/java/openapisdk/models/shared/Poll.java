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
 * Poll
 * Represent a Poll attached to a Tweet
**/
public class Poll {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_minutes")
    public Long durationMinutes;
    public Poll withDurationMinutes(Long durationMinutes) {
        this.durationMinutes = durationMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_datetime")
    public OffsetDateTime endDatetime;
    public Poll withEndDatetime(OffsetDateTime endDatetime) {
        this.endDatetime = endDatetime;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Poll withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("options")
    public PollOption[] options;
    public Poll withOptions(PollOption[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voting_status")
    public PollVotingStatusEnum votingStatus;
    public Poll withVotingStatus(PollVotingStatusEnum votingStatus) {
        this.votingStatus = votingStatus;
        return this;
    }
}