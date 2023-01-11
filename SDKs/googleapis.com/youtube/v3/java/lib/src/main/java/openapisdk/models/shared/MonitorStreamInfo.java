package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MonitorStreamInfo
 * Settings and Info of the monitor stream
**/
public class MonitorStreamInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("broadcastStreamDelayMs")
    public Long broadcastStreamDelayMs;
    public MonitorStreamInfo withBroadcastStreamDelayMs(Long broadcastStreamDelayMs) {
        this.broadcastStreamDelayMs = broadcastStreamDelayMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embedHtml")
    public String embedHtml;
    public MonitorStreamInfo withEmbedHtml(String embedHtml) {
        this.embedHtml = embedHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableMonitorStream")
    public Boolean enableMonitorStream;
    public MonitorStreamInfo withEnableMonitorStream(Boolean enableMonitorStream) {
        this.enableMonitorStream = enableMonitorStream;
        return this;
    }
}