package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicSegment
 * Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.
**/
public class DynamicSegment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DynamicSegment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionSegment")
    public SegmentDefinition sessionSegment;
    public DynamicSegment withSessionSegment(SegmentDefinition sessionSegment) {
        this.sessionSegment = sessionSegment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userSegment")
    public SegmentDefinition userSegment;
    public DynamicSegment withUserSegment(SegmentDefinition userSegment) {
        this.userSegment = userSegment;
        return this;
    }
}