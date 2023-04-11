import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest
 */
export declare class MetricShortId extends SpeakeasyBase {
    /**
     * The index of the corresponding metric in the ReportWorkItemStatusRequest. Required.
     */
    metricIndex?: number;
    /**
     * The service-generated short identifier for the metric.
     */
    shortId?: string;
}
