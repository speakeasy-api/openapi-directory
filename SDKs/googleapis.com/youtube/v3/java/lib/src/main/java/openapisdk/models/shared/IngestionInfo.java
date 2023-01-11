package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IngestionInfo
 * Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.
**/
public class IngestionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupIngestionAddress")
    public String backupIngestionAddress;
    public IngestionInfo withBackupIngestionAddress(String backupIngestionAddress) {
        this.backupIngestionAddress = backupIngestionAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingestionAddress")
    public String ingestionAddress;
    public IngestionInfo withIngestionAddress(String ingestionAddress) {
        this.ingestionAddress = ingestionAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rtmpsBackupIngestionAddress")
    public String rtmpsBackupIngestionAddress;
    public IngestionInfo withRtmpsBackupIngestionAddress(String rtmpsBackupIngestionAddress) {
        this.rtmpsBackupIngestionAddress = rtmpsBackupIngestionAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rtmpsIngestionAddress")
    public String rtmpsIngestionAddress;
    public IngestionInfo withRtmpsIngestionAddress(String rtmpsIngestionAddress) {
        this.rtmpsIngestionAddress = rtmpsIngestionAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamName")
    public String streamName;
    public IngestionInfo withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}