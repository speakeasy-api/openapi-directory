package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudienceSegmentGroup
 * Audience Segment Group.
**/
public class AudienceSegmentGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceSegments")
    public AudienceSegment[] audienceSegments;
    public AudienceSegmentGroup withAudienceSegments(AudienceSegment[] audienceSegments) {
        this.audienceSegments = audienceSegments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AudienceSegmentGroup withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AudienceSegmentGroup withName(String name) {
        this.name = name;
        return this;
    }
}