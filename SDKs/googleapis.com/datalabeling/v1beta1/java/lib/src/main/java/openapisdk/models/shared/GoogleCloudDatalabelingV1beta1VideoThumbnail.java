package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1VideoThumbnail
 * Container of information of a video thumbnail.
**/
public class GoogleCloudDatalabelingV1beta1VideoThumbnail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public GoogleCloudDatalabelingV1beta1VideoThumbnail withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeOffset")
    public String timeOffset;
    public GoogleCloudDatalabelingV1beta1VideoThumbnail withTimeOffset(String timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    }
}