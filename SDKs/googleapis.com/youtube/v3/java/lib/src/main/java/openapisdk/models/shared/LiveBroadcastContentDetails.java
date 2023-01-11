package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * LiveBroadcastContentDetails
 * Detailed settings of a broadcast.
**/
public class LiveBroadcastContentDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundStreamId")
    public String boundStreamId;
    public LiveBroadcastContentDetails withBoundStreamId(String boundStreamId) {
        this.boundStreamId = boundStreamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("boundStreamLastUpdateTimeMs")
    public OffsetDateTime boundStreamLastUpdateTimeMs;
    public LiveBroadcastContentDetails withBoundStreamLastUpdateTimeMs(OffsetDateTime boundStreamLastUpdateTimeMs) {
        this.boundStreamLastUpdateTimeMs = boundStreamLastUpdateTimeMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closedCaptionsType")
    public LiveBroadcastContentDetailsClosedCaptionsTypeEnum closedCaptionsType;
    public LiveBroadcastContentDetails withClosedCaptionsType(LiveBroadcastContentDetailsClosedCaptionsTypeEnum closedCaptionsType) {
        this.closedCaptionsType = closedCaptionsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoStart")
    public Boolean enableAutoStart;
    public LiveBroadcastContentDetails withEnableAutoStart(Boolean enableAutoStart) {
        this.enableAutoStart = enableAutoStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoStop")
    public Boolean enableAutoStop;
    public LiveBroadcastContentDetails withEnableAutoStop(Boolean enableAutoStop) {
        this.enableAutoStop = enableAutoStop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableClosedCaptions")
    public Boolean enableClosedCaptions;
    public LiveBroadcastContentDetails withEnableClosedCaptions(Boolean enableClosedCaptions) {
        this.enableClosedCaptions = enableClosedCaptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableContentEncryption")
    public Boolean enableContentEncryption;
    public LiveBroadcastContentDetails withEnableContentEncryption(Boolean enableContentEncryption) {
        this.enableContentEncryption = enableContentEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableDvr")
    public Boolean enableDvr;
    public LiveBroadcastContentDetails withEnableDvr(Boolean enableDvr) {
        this.enableDvr = enableDvr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableEmbed")
    public Boolean enableEmbed;
    public LiveBroadcastContentDetails withEnableEmbed(Boolean enableEmbed) {
        this.enableEmbed = enableEmbed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableLowLatency")
    public Boolean enableLowLatency;
    public LiveBroadcastContentDetails withEnableLowLatency(Boolean enableLowLatency) {
        this.enableLowLatency = enableLowLatency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latencyPreference")
    public LiveBroadcastContentDetailsLatencyPreferenceEnum latencyPreference;
    public LiveBroadcastContentDetails withLatencyPreference(LiveBroadcastContentDetailsLatencyPreferenceEnum latencyPreference) {
        this.latencyPreference = latencyPreference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mesh")
    public String mesh;
    public LiveBroadcastContentDetails withMesh(String mesh) {
        this.mesh = mesh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitorStream")
    public MonitorStreamInfo monitorStream;
    public LiveBroadcastContentDetails withMonitorStream(MonitorStreamInfo monitorStream) {
        this.monitorStream = monitorStream;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projection")
    public LiveBroadcastContentDetailsProjectionEnum projection;
    public LiveBroadcastContentDetails withProjection(LiveBroadcastContentDetailsProjectionEnum projection) {
        this.projection = projection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordFromStart")
    public Boolean recordFromStart;
    public LiveBroadcastContentDetails withRecordFromStart(Boolean recordFromStart) {
        this.recordFromStart = recordFromStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startWithSlate")
    public Boolean startWithSlate;
    public LiveBroadcastContentDetails withStartWithSlate(Boolean startWithSlate) {
        this.startWithSlate = startWithSlate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stereoLayout")
    public LiveBroadcastContentDetailsStereoLayoutEnum stereoLayout;
    public LiveBroadcastContentDetails withStereoLayout(LiveBroadcastContentDetailsStereoLayoutEnum stereoLayout) {
        this.stereoLayout = stereoLayout;
        return this;
    }
}