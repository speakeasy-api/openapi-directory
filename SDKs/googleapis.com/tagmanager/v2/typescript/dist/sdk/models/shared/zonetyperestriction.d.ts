import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Zone's type restrictions.
 */
export declare class ZoneTypeRestriction extends SpeakeasyBase {
    /**
     * True if type restrictions have been enabled for this Zone.
     */
    enable?: boolean;
    /**
     * List of type public ids that have been whitelisted for use in this Zone.
     */
    whitelistedTypeId?: string[];
}
