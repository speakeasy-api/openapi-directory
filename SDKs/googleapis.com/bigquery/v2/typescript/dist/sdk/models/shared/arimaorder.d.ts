import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Arima order, can be used for both non-seasonal and seasonal parts.
 */
export declare class ArimaOrder extends SpeakeasyBase {
    /**
     * Order of the differencing part.
     */
    d?: string;
    /**
     * Order of the autoregressive part.
     */
    p?: string;
    /**
     * Order of the moving-average part.
     */
    q?: string;
}
