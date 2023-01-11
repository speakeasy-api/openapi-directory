package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationConfig
 * Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
**/
public class NotificationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NotificationConfig withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NotificationConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubTopic")
    public String pubsubTopic;
    public NotificationConfig withPubsubTopic(String pubsubTopic) {
        this.pubsubTopic = pubsubTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public NotificationConfig withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingConfig")
    public StreamingConfig streamingConfig;
    public NotificationConfig withStreamingConfig(StreamingConfig streamingConfig) {
        this.streamingConfig = streamingConfig;
        return this;
    }
}