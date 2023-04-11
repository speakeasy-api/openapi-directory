import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pricing information for revenue-sharing transactions
 */
export declare class DownloadHistoryRevshareDetails extends SpeakeasyBase {
    /**
     * The amount charged for the license
     */
    purchaseAmount: string;
    /**
     * The currency the amount was charged in
     */
    purchaseCurrency: string;
}
