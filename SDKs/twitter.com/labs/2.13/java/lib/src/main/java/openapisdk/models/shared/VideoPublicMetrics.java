package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoPublicMetrics
 * Engagement metrics for the Media at the time of the request.
**/
public class VideoPublicMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view_count")
    public Integer viewCount;
    public VideoPublicMetrics withViewCount(Integer viewCount) {
        this.viewCount = viewCount;
        return this;
    }
}