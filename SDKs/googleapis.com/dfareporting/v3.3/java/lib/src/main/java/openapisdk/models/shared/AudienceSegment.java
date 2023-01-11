package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudienceSegment
 * Audience Segment.
**/
public class AudienceSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocation")
    public Integer allocation;
    public AudienceSegment withAllocation(Integer allocation) {
        this.allocation = allocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AudienceSegment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AudienceSegment withName(String name) {
        this.name = name;
        return this;
    }
}