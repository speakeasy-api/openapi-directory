import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetTxsRequest extends SpeakeasyBase {
    /**
     * Address
     */
    address?: string;
    /**
     * Block Hash
     */
    block?: string;
    /**
     * Page number to display
     */
    pageNum?: number;
}
export declare class TestnetGetTxsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of transactions
     */
    getTxsResponse?: shared.GetTxsResponse;
}
