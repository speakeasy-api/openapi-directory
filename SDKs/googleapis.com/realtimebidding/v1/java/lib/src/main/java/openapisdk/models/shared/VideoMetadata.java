package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoMetadata
 * Video metadata for a creative.
**/
public class VideoMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public VideoMetadata withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isValidVast")
    public Boolean isValidVast;
    public VideoMetadata withIsValidVast(Boolean isValidVast) {
        this.isValidVast = isValidVast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isVpaid")
    public Boolean isVpaid;
    public VideoMetadata withIsVpaid(Boolean isVpaid) {
        this.isVpaid = isVpaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaFiles")
    public MediaFile[] mediaFiles;
    public VideoMetadata withMediaFiles(MediaFile[] mediaFiles) {
        this.mediaFiles = mediaFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipOffset")
    public String skipOffset;
    public VideoMetadata withSkipOffset(String skipOffset) {
        this.skipOffset = skipOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vastVersion")
    public VideoMetadataVastVersionEnum vastVersion;
    public VideoMetadata withVastVersion(VideoMetadataVastVersionEnum vastVersion) {
        this.vastVersion = vastVersion;
        return this;
    }
}