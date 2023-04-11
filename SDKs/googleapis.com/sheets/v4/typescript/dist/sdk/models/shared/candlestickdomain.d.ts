import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
/**
 * The domain of a CandlestickChart.
 */
export declare class CandlestickDomain extends SpeakeasyBase {
    /**
     * The data included in a domain or series.
     */
    data?: ChartData;
    /**
     * True to reverse the order of the domain values (horizontal axis).
     */
    reversed?: boolean;
}
