package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GraphicsStats
 * Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
**/
public class GraphicsStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buckets")
    public GraphicsStatsBucket[] buckets;
    public GraphicsStats withBuckets(GraphicsStatsBucket[] buckets) {
        this.buckets = buckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highInputLatencyCount")
    public String highInputLatencyCount;
    public GraphicsStats withHighInputLatencyCount(String highInputLatencyCount) {
        this.highInputLatencyCount = highInputLatencyCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jankyFrames")
    public String jankyFrames;
    public GraphicsStats withJankyFrames(String jankyFrames) {
        this.jankyFrames = jankyFrames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missedVsyncCount")
    public String missedVsyncCount;
    public GraphicsStats withMissedVsyncCount(String missedVsyncCount) {
        this.missedVsyncCount = missedVsyncCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p50Millis")
    public String p50Millis;
    public GraphicsStats withP50Millis(String p50Millis) {
        this.p50Millis = p50Millis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p90Millis")
    public String p90Millis;
    public GraphicsStats withP90Millis(String p90Millis) {
        this.p90Millis = p90Millis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p95Millis")
    public String p95Millis;
    public GraphicsStats withP95Millis(String p95Millis) {
        this.p95Millis = p95Millis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p99Millis")
    public String p99Millis;
    public GraphicsStats withP99Millis(String p99Millis) {
        this.p99Millis = p99Millis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slowBitmapUploadCount")
    public String slowBitmapUploadCount;
    public GraphicsStats withSlowBitmapUploadCount(String slowBitmapUploadCount) {
        this.slowBitmapUploadCount = slowBitmapUploadCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slowDrawCount")
    public String slowDrawCount;
    public GraphicsStats withSlowDrawCount(String slowDrawCount) {
        this.slowDrawCount = slowDrawCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slowUiThreadCount")
    public String slowUiThreadCount;
    public GraphicsStats withSlowUiThreadCount(String slowUiThreadCount) {
        this.slowUiThreadCount = slowUiThreadCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalFrames")
    public String totalFrames;
    public GraphicsStats withTotalFrames(String totalFrames) {
        this.totalFrames = totalFrames;
        return this;
    }
}