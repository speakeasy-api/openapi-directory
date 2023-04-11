import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
/**
 * The domain of a waterfall chart.
 */
export declare class WaterfallChartDomain extends SpeakeasyBase {
    /**
     * The data included in a domain or series.
     */
    data?: ChartData;
    /**
     * True to reverse the order of the domain values (horizontal axis).
     */
    reversed?: boolean;
}
