import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetTokenMetadataRequest extends SpeakeasyBase {
    /**
     * TokenId to request metadata for
     */
    tokenid: string;
    /**
     * 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses
     */
    verbosity?: number;
}
export declare class TestnetGetTokenMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An object containing the metadata of a token
     */
    getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
