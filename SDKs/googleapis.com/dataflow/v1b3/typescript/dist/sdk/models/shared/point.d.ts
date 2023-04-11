import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A point in the timeseries.
 */
export declare class Point extends SpeakeasyBase {
    /**
     * The timestamp of the point.
     */
    time?: string;
    /**
     * The value of the point.
     */
    value?: number;
}
