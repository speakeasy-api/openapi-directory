import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for UnsubscribeAuctionPackage.
 */
export declare class UnsubscribeClientsRequest extends SpeakeasyBase {
    /**
     * Optional. A list of client buyers to unsubscribe from the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`.
     */
    clients?: string[];
}
