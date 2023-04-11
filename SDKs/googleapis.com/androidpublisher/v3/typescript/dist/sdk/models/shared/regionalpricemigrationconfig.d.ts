import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a price migration.
 */
export declare class RegionalPriceMigrationConfig extends SpeakeasyBase {
    /**
     * Required. The cutoff time for historical prices that subscribers can remain paying. Subscribers who are on a price that was created before this cutoff time will be migrated to the currently-offered price. These subscribers will receive a notification that they will be paying a different price. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
     */
    oldestAllowedPriceVersionTime?: string;
    /**
     * Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".
     */
    regionCode?: string;
}
