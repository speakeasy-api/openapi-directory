package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PredictionQueryToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application")
    public String application;
    public PredictionQueryToken withApplication(String application) {
        this.application = application;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continuation")
    public String continuation;
    public PredictionQueryToken withContinuation(String continuation) {
        this.continuation = continuation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public PredictionQueryToken withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iterationId")
    public String iterationId;
    public PredictionQueryToken withIterationId(String iterationId) {
        this.iterationId = iterationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCount")
    public Integer maxCount;
    public PredictionQueryToken withMaxCount(Integer maxCount) {
        this.maxCount = maxCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderBy")
    public PredictionQueryTokenOrderByEnum orderBy;
    public PredictionQueryToken withOrderBy(PredictionQueryTokenOrderByEnum orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public String session;
    public PredictionQueryToken withSession(String session) {
        this.session = session;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public PredictionQueryToken withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}