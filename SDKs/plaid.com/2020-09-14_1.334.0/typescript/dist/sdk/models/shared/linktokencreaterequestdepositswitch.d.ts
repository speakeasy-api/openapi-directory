import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies options for initializing Link for use with the Deposit Switch (beta) product. This field is required if `deposit_switch` is included in the `products` array.
 */
export declare class LinkTokenCreateRequestDepositSwitch extends SpeakeasyBase {
    /**
     * The `deposit_switch_id` provided by the `/deposit_switch/create` endpoint.
     */
    depositSwitchId: string;
}
