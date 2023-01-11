import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A transaction represents the entire purchase transaction.
**/
export declare class GoogleCloudRecommendationengineV1beta1PurchaseTransaction extends SpeakeasyBase {
    costs?: Record<string, number>;
    currencyCode?: string;
    id?: string;
    revenue?: number;
    taxes?: Record<string, number>;
}
