package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsUpload
 * Information about the uploaded video.
**/
public class ActivityContentDetailsUpload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoId")
    public String videoId;
    public ActivityContentDetailsUpload withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}