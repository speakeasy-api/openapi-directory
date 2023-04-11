import { SpeakeasyBase } from "../../../internal/utils";
import { AppStartTime } from "./appstarttime";
import { GraphicsStats } from "./graphicsstats";
import { PerfEnvironment } from "./perfenvironment";
export declare enum PerfMetricsSummaryPerfMetricsEnum {
    PerfMetricTypeUnspecified = "perfMetricTypeUnspecified",
    Memory = "memory",
    Cpu = "cpu",
    Network = "network",
    Graphics = "graphics"
}
/**
 * A summary of perf metrics collected and performance environment info
 */
export declare class PerfMetricsSummary extends SpeakeasyBase {
    appStartTime?: AppStartTime;
    /**
     * A tool results execution ID. @OutputOnly
     */
    executionId?: string;
    /**
     * Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.
     */
    graphicsStats?: GraphicsStats;
    /**
     * A tool results history ID. @OutputOnly
     */
    historyId?: string;
    /**
     * Encapsulates performance environment info
     */
    perfEnvironment?: PerfEnvironment;
    /**
     * Set of resource collected
     */
    perfMetrics?: PerfMetricsSummaryPerfMetricsEnum[];
    /**
     * The cloud project @OutputOnly
     */
    projectId?: string;
    /**
     * A tool results step ID. @OutputOnly
     */
    stepId?: string;
}
