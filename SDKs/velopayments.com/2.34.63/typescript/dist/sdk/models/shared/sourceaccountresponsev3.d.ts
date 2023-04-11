import { SpeakeasyBase } from "../../../internal/utils";
import { AutoTopUpConfigV3 } from "./autotopupconfigv3";
import { NotificationsV3 } from "./notificationsv3";
/**
 * Source account response
 */
export declare class SourceAccountResponseV3 extends SpeakeasyBase {
    autoTopUpConfig?: AutoTopUpConfigV3;
    /**
     * Decimal implied
     */
    balance?: number;
    /**
     * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    country?: string;
    /**
     * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    currency?: string;
    customerId?: string;
    /**
     * An optional flag for whether the source account has been deleted. Only present in the response if true.
     */
    deleted?: boolean;
    /**
     * An optional timestamp when the source account has been deleted. Only present in the response if deleted.
     */
    deletedAt?: Date;
    /**
     * The funding reference (will not be set for DECOUPLED accounts).
     */
    fundingRef?: string;
    /**
     * Source Account Id
     */
    id: string;
    name?: string;
    notifications?: NotificationsV3;
    payorId?: string;
    /**
     * The physical account id (will not be set for DECOUPLED accounts).
     */
    physicalAccountId?: string;
    /**
     * The physical account name (will not be set for DECOUPLED accounts).
     */
    physicalAccountName?: string;
    /**
     * The pooled account flag (will not be set for DECOUPLED accounts).
     */
    pooled?: boolean;
    railsId: string;
    type: string;
    /**
     * An optional flag for whether the source account has been deleted by a user. Only present in the response if true.
     */
    userDeleted?: boolean;
}
