package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MediaInsights
 * Insights and statistics for the media item.
**/
public class MediaInsights {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewCount")
    public String viewCount;
    public MediaInsights withViewCount(String viewCount) {
        this.viewCount = viewCount;
        return this;
    }
}