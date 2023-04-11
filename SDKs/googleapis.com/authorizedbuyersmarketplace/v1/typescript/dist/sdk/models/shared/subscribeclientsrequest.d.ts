import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for SubscribeAuctionPackageClients.
 */
export declare class SubscribeClientsRequest extends SpeakeasyBase {
    /**
     * Optional. A list of client buyers to subscribe to the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`. The current buyer will be subscribed to the auction package regardless of the list contents if not already.
     */
    clients?: string[];
}
