package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConsumerInfo
 * `ConsumerInfo` provides information about the consumer.
**/
public class ConsumerInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerNumber")
    public String consumerNumber;
    public ConsumerInfo withConsumerNumber(String consumerNumber) {
        this.consumerNumber = consumerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectNumber")
    public String projectNumber;
    public ConsumerInfo withProjectNumber(String projectNumber) {
        this.projectNumber = projectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ConsumerInfoTypeEnum type;
    public ConsumerInfo withType(ConsumerInfoTypeEnum type) {
        this.type = type;
        return this;
    }
}