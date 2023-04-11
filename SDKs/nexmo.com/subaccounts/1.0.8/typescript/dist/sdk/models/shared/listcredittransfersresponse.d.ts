import { SpeakeasyBase } from "../../../internal/utils";
import { TransferCreditResponse } from "./transfercreditresponse";
export declare class ListCreditTransfersResponseEmbedded extends SpeakeasyBase {
    creditTransfers?: TransferCreditResponse[];
}
/**
 * List credit transfers response
 */
export declare class ListCreditTransfersResponse extends SpeakeasyBase {
    embedded?: ListCreditTransfersResponseEmbedded;
}
