package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Subscription
 * A subscription resource.
**/
public class Subscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ackDeadlineSeconds")
    public Integer ackDeadlineSeconds;
    public Subscription withAckDeadlineSeconds(Integer ackDeadlineSeconds) {
        this.ackDeadlineSeconds = ackDeadlineSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Subscription withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pushConfig")
    public PushConfig pushConfig;
    public Subscription withPushConfig(PushConfig pushConfig) {
        this.pushConfig = pushConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public Subscription withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}