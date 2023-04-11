import { SpeakeasyBase } from "../../../internal/utils";
import { GraphicsStatsBucket } from "./graphicsstatsbucket";
/**
 * Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
 */
export declare class GraphicsStats extends SpeakeasyBase {
    /**
     * Histogram of frame render times. There should be 154 buckets ranging from [5ms, 6ms) to [4950ms, infinity)
     */
    buckets?: GraphicsStatsBucket[];
    /**
     * Total "high input latency" events.
     */
    highInputLatencyCount?: string;
    /**
     * Total frames with slow render time. Should be <= total_frames.
     */
    jankyFrames?: string;
    /**
     * Total "missed vsync" events.
     */
    missedVsyncCount?: string;
    /**
     * 50th percentile frame render time in milliseconds.
     */
    p50Millis?: string;
    /**
     * 90th percentile frame render time in milliseconds.
     */
    p90Millis?: string;
    /**
     * 95th percentile frame render time in milliseconds.
     */
    p95Millis?: string;
    /**
     * 99th percentile frame render time in milliseconds.
     */
    p99Millis?: string;
    /**
     * Total "slow bitmap upload" events.
     */
    slowBitmapUploadCount?: string;
    /**
     * Total "slow draw" events.
     */
    slowDrawCount?: string;
    /**
     * Total "slow UI thread" events.
     */
    slowUiThreadCount?: string;
    /**
     * Total frames rendered by package.
     */
    totalFrames?: string;
}
