package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KafkaConfig
 * The configuration for kafka access
**/
public class KafkaConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPass")
    public String keyPass;
    public KafkaConfig withKeyPass(String keyPass) {
        this.keyPass = keyPass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyStore")
    public String keyStore;
    public KafkaConfig withKeyStore(String keyStore) {
        this.keyStore = keyStore;
        return this;
    }
    @JsonProperty("servers")
    public String[] servers;
    public KafkaConfig withServers(String[] servers) {
        this.servers = servers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public KafkaConfig withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trustore")
    public String trustore;
    public KafkaConfig withTrustore(String trustore) {
        this.trustore = trustore;
        return this;
    }
}