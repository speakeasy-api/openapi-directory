import { SpeakeasyBase } from "../../../internal/utils";
import { TransferBalanceResponse } from "./transferbalanceresponse";
export declare class ListBalanceTransfersResponseEmbedded extends SpeakeasyBase {
    balanceTransfers?: TransferBalanceResponse[];
}
/**
 * List balance transfers response
 */
export declare class ListBalanceTransfersResponse extends SpeakeasyBase {
    embedded?: ListBalanceTransfersResponseEmbedded;
}
