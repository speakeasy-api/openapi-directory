import { SpeakeasyBase } from "../../../internal/utils";
import { AutoTopUpConfigV2 } from "./autotopupconfigv2";
import { NotificationsV2 } from "./notificationsv2";
/**
 * Source account response
 */
export declare class SourceAccountResponseV2 extends SpeakeasyBase {
    accountType: string;
    autoTopUpConfig?: AutoTopUpConfigV2;
    /**
     * Decimal implied
     */
    balance?: number;
    balanceVisible: boolean;
    currency?: string;
    customerId?: string;
    fundingAccountId?: string;
    fundingRef: string;
    /**
     * Source Account Id
     */
    id: string;
    name?: string;
    notifications?: NotificationsV2;
    payorId?: string;
    physicalAccountId?: string;
    physicalAccountName: string;
    pooled: boolean;
    railsId: string;
}
