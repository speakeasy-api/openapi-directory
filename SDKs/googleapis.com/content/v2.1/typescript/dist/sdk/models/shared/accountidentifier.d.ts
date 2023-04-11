import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountIdentifier extends SpeakeasyBase {
    /**
     * The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount).
     */
    aggregatorId?: string;
    /**
     * The merchant account ID, set for individual accounts and subaccounts.
     */
    merchantId?: string;
}
