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
 * CreativeAssignment
 * Creative Assignment.
**/
public class CreativeAssignment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreativeAssignment withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyEventTags")
    public Boolean applyEventTags;
    public CreativeAssignment withApplyEventTags(Boolean applyEventTags) {
        this.applyEventTags = applyEventTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrl")
    public ClickThroughUrl clickThroughUrl;
    public CreativeAssignment withClickThroughUrl(ClickThroughUrl clickThroughUrl) {
        this.clickThroughUrl = clickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionCreativeOverrides")
    public CompanionClickThroughOverride[] companionCreativeOverrides;
    public CreativeAssignment withCompanionCreativeOverrides(CompanionClickThroughOverride[] companionCreativeOverrides) {
        this.companionCreativeOverrides = companionCreativeOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeGroupAssignments")
    public CreativeGroupAssignment[] creativeGroupAssignments;
    public CreativeAssignment withCreativeGroupAssignments(CreativeGroupAssignment[] creativeGroupAssignments) {
        this.creativeGroupAssignments = creativeGroupAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeId")
    public String creativeId;
    public CreativeAssignment withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeIdDimensionValue")
    public DimensionValue creativeIdDimensionValue;
    public CreativeAssignment withCreativeIdDimensionValue(DimensionValue creativeIdDimensionValue) {
        this.creativeIdDimensionValue = creativeIdDimensionValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public CreativeAssignment withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("richMediaExitOverrides")
    public RichMediaExitOverride[] richMediaExitOverrides;
    public CreativeAssignment withRichMediaExitOverrides(RichMediaExitOverride[] richMediaExitOverrides) {
        this.richMediaExitOverrides = richMediaExitOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Integer sequence;
    public CreativeAssignment withSequence(Integer sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslCompliant")
    public Boolean sslCompliant;
    public CreativeAssignment withSslCompliant(Boolean sslCompliant) {
        this.sslCompliant = sslCompliant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public CreativeAssignment withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Integer weight;
    public CreativeAssignment withWeight(Integer weight) {
        this.weight = weight;
        return this;
    }
}