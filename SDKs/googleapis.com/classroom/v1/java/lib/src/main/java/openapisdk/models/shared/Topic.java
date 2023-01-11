package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Topic
 * Topic created by a teacher for the course
**/
public class Topic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseId")
    public String courseId;
    public Topic withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Topic withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicId")
    public String topicId;
    public Topic withTopicId(String topicId) {
        this.topicId = topicId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Topic withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}