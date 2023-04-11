import { SpeakeasyBase } from "../../../internal/utils";
import { GetTxResponse } from "./gettxresponse";
/**
 * Object containing an array of transaction objects
 */
export declare class GetTxsResponse extends SpeakeasyBase {
    /**
     * Number of pages of transactions
     */
    pagesTotal?: number;
    /**
     * Array of transaction objects
     */
    txs?: GetTxResponse[];
}
