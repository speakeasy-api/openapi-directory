import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetBlockRequest extends SpeakeasyBase {
    /**
     * Block Hash
     */
    blockhash: string;
}
export declare class TestnetGetBlockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object containing all information on a blockchain block
     */
    getBlockResponse?: shared.GetBlockResponse;
}
