package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOfferingsOfferingIdMetadataTopicRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public PutOfferingsOfferingIdMetadataTopicRequestBody withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}