package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoFileDetails
 * Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
**/
public class VideoFileDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioStreams")
    public VideoFileDetailsAudioStream[] audioStreams;
    public VideoFileDetails withAudioStreams(VideoFileDetailsAudioStream[] audioStreams) {
        this.audioStreams = audioStreams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrateBps")
    public String bitrateBps;
    public VideoFileDetails withBitrateBps(String bitrateBps) {
        this.bitrateBps = bitrateBps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public String container;
    public VideoFileDetails withContainer(String container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public VideoFileDetails withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationMs")
    public String durationMs;
    public VideoFileDetails withDurationMs(String durationMs) {
        this.durationMs = durationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;
    public VideoFileDetails withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSize")
    public String fileSize;
    public VideoFileDetails withFileSize(String fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileType")
    public VideoFileDetailsFileTypeEnum fileType;
    public VideoFileDetails withFileType(VideoFileDetailsFileTypeEnum fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoStreams")
    public VideoFileDetailsVideoStream[] videoStreams;
    public VideoFileDetails withVideoStreams(VideoFileDetailsVideoStream[] videoStreams) {
        this.videoStreams = videoStreams;
        return this;
    }
}