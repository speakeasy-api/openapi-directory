package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Feed
 * A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
**/
public class Feed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseRosterChangesInfo")
    public CourseRosterChangesInfo courseRosterChangesInfo;
    public Feed withCourseRosterChangesInfo(CourseRosterChangesInfo courseRosterChangesInfo) {
        this.courseRosterChangesInfo = courseRosterChangesInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseWorkChangesInfo")
    public CourseWorkChangesInfo courseWorkChangesInfo;
    public Feed withCourseWorkChangesInfo(CourseWorkChangesInfo courseWorkChangesInfo) {
        this.courseWorkChangesInfo = courseWorkChangesInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedType")
    public FeedFeedTypeEnum feedType;
    public Feed withFeedType(FeedFeedTypeEnum feedType) {
        this.feedType = feedType;
        return this;
    }
}