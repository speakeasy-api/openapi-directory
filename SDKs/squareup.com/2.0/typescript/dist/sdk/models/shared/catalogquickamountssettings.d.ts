import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogQuickAmount } from "./catalogquickamount";
/**
 * A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts.
 */
export declare class CatalogQuickAmountsSettings extends SpeakeasyBase {
    /**
     * Represents a set of Quick Amounts at this location.
     */
    amounts?: CatalogQuickAmount[];
    /**
     * Represents location's eligibility for auto amounts
     *
     * @remarks
     * The boolean should be consistent with whether there are AUTO amounts in the `amounts`.
     */
    eligibleForAutoAmounts?: boolean;
    /**
     * Represents the option seller currently uses on Quick Amounts.
     */
    option: string;
}
