package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1VideoPayload
 * Container of information of a video.
**/
public class GoogleCloudDatalabelingV1beta1VideoPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameRate")
    public Float frameRate;
    public GoogleCloudDatalabelingV1beta1VideoPayload withFrameRate(Float frameRate) {
        this.frameRate = frameRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public GoogleCloudDatalabelingV1beta1VideoPayload withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signedUri")
    public String signedUri;
    public GoogleCloudDatalabelingV1beta1VideoPayload withSignedUri(String signedUri) {
        this.signedUri = signedUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoThumbnails")
    public GoogleCloudDatalabelingV1beta1VideoThumbnail[] videoThumbnails;
    public GoogleCloudDatalabelingV1beta1VideoPayload withVideoThumbnails(GoogleCloudDatalabelingV1beta1VideoThumbnail[] videoThumbnails) {
        this.videoThumbnails = videoThumbnails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoUri")
    public String videoUri;
    public GoogleCloudDatalabelingV1beta1VideoPayload withVideoUri(String videoUri) {
        this.videoUri = videoUri;
        return this;
    }
}