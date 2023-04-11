import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
/**
 * Information about SKUs appearing in the cost estimate.
 */
export declare class Sku extends SpeakeasyBase {
    /**
     * The display name for the SKU. Example: A2 Instance Core running in Americas
     */
    displayName?: string;
    /**
     * A timeline of prices for a SKU in chronological order. Note: The API currently only supports using a constant price for the entire estimation time frame so this list will contain a single value.
     */
    prices?: Price[];
    /**
     * The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE"
     */
    sku?: string;
}
