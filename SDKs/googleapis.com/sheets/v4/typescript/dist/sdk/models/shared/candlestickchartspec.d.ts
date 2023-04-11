import { SpeakeasyBase } from "../../../internal/utils";
import { CandlestickData } from "./candlestickdata";
import { CandlestickDomain } from "./candlestickdomain";
/**
 * A candlestick chart.
 */
export declare class CandlestickChartSpec extends SpeakeasyBase {
    /**
     * The Candlestick chart data. Only one CandlestickData is supported.
     */
    data?: CandlestickData[];
    /**
     * The domain of a CandlestickChart.
     */
    domain?: CandlestickDomain;
}
