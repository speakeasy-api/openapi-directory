import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Progress metric is (string, int|float|string) pair.
 */
export declare class Metric extends SpeakeasyBase {
    /**
     * For metrics with floating point value.
     */
    doubleValue?: number;
    /**
     * For metrics with integer value.
     */
    intValue?: string;
    /**
     * Required. Metric name, e.g., "nodes total", "percent done".
     */
    name?: string;
    /**
     * For metrics with custom values (ratios, visual progress, etc.).
     */
    stringValue?: string;
}
