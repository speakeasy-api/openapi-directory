package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutCoursesContentIdMetadataTopicRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public PutCoursesContentIdMetadataTopicRequestBody withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}