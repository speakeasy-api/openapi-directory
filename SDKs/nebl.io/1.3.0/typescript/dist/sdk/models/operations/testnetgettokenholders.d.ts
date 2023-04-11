import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetTokenHoldersRequest extends SpeakeasyBase {
    /**
     * TokenId to request metadata for
     */
    tokenid: string;
}
export declare class TestnetGetTokenHoldersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An object containing all of the addresses holding a token
     */
    getTokenHoldersResponse?: shared.GetTokenHoldersResponse;
}
