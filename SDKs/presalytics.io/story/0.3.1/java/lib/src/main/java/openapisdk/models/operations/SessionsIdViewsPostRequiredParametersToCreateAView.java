package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SessionsIdViewsPostRequiredParametersToCreateAView
 * A page view required a page number from the story outline to be created
**/
public class SessionsIdViewsPostRequiredParametersToCreateAView {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeMSecs")
    public Long activeMSecs;
    public SessionsIdViewsPostRequiredParametersToCreateAView withActiveMSecs(Long activeMSecs) {
        this.activeMSecs = activeMSecs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additional")
    public String additional;
    public SessionsIdViewsPostRequiredParametersToCreateAView withAdditional(String additional) {
        this.additional = additional;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public SessionsIdViewsPostRequiredParametersToCreateAView withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("pageNumber")
    public Long pageNumber;
    public SessionsIdViewsPostRequiredParametersToCreateAView withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public SessionsIdViewsPostRequiredParametersToCreateAView withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}