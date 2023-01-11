package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoOrganicMetrics
 * Organic nonpublic engagement metrics for the Media at the time of the request.
**/
public class VideoOrganicMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playback_0_count")
    public Integer playback0Count;
    public VideoOrganicMetrics withPlayback0Count(Integer playback0Count) {
        this.playback0Count = playback0Count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playback_100_count")
    public Integer playback100Count;
    public VideoOrganicMetrics withPlayback100Count(Integer playback100Count) {
        this.playback100Count = playback100Count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playback_25_count")
    public Integer playback25Count;
    public VideoOrganicMetrics withPlayback25Count(Integer playback25Count) {
        this.playback25Count = playback25Count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playback_50_count")
    public Integer playback50Count;
    public VideoOrganicMetrics withPlayback50Count(Integer playback50Count) {
        this.playback50Count = playback50Count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playback_75_count")
    public Integer playback75Count;
    public VideoOrganicMetrics withPlayback75Count(Integer playback75Count) {
        this.playback75Count = playback75Count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("view_count")
    public Integer viewCount;
    public VideoOrganicMetrics withViewCount(Integer viewCount) {
        this.viewCount = viewCount;
        return this;
    }
}