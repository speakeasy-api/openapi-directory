import { SpeakeasyBase } from "../../../internal/utils";
import { CandlestickSeries } from "./candlestickseries";
/**
 * The Candlestick chart data, each containing the low, open, close, and high values for a series.
 */
export declare class CandlestickData extends SpeakeasyBase {
    /**
     * The series of a CandlestickData.
     */
    closeSeries?: CandlestickSeries;
    /**
     * The series of a CandlestickData.
     */
    highSeries?: CandlestickSeries;
    /**
     * The series of a CandlestickData.
     */
    lowSeries?: CandlestickSeries;
    /**
     * The series of a CandlestickData.
     */
    openSeries?: CandlestickSeries;
}
