package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MediaFile
 * Information about each media file in the VAST.
**/
public class MediaFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitrate")
    public String bitrate;
    public MediaFile withBitrate(String bitrate) {
        this.bitrate = bitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public MediaFileMimeTypeEnum mimeType;
    public MediaFile withMimeType(MediaFileMimeTypeEnum mimeType) {
        this.mimeType = mimeType;
        return this;
    }
}