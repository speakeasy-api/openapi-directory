package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResellernotifyResource
 * JSON template for resellernotify response.
**/
public class ResellernotifyResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicName")
    public String topicName;
    public ResellernotifyResource withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}