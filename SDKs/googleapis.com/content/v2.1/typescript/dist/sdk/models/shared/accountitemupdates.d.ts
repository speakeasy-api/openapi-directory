import { SpeakeasyBase } from "../../../internal/utils";
import { AccountItemUpdatesSettings } from "./accountitemupdatessettings";
/**
 * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
 */
export declare class AccountItemUpdatesInput extends SpeakeasyBase {
    /**
     * Settings for the Automatic Item Updates.
     */
    accountItemUpdatesSettings?: AccountItemUpdatesSettings;
}
/**
 * Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
 */
export declare class AccountItemUpdates extends SpeakeasyBase {
    /**
     * Settings for the Automatic Item Updates.
     */
    accountItemUpdatesSettings?: AccountItemUpdatesSettings;
    /**
     * Output only. The effective value of allow_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowAvailabilityUpdates?: boolean;
    /**
     * Output only. The effective value of allow_condition_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowConditionUpdates?: boolean;
    /**
     * Output only. The effective value of allow_price_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowPriceUpdates?: boolean;
    /**
     * Output only. The effective value of allow_strict_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowStrictAvailabilityUpdates?: boolean;
}
