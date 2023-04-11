import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a quota for contact centers.
 */
export declare class ContactCenterQuota extends SpeakeasyBase {
    /**
     * Reflects the count limit of contact centers on a billing account.
     */
    contactCenterCountLimit?: number;
    /**
     * Reflects the count sum of contact centers on a billing account.
     */
    contactCenterCountSum?: number;
}
