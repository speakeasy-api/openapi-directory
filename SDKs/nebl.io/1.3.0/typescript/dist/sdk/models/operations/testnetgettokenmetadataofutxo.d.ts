import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetTokenMetadataOfUtxoRequest extends SpeakeasyBase {
    /**
     * TokenId to request metadata for
     */
    tokenid: string;
    /**
     * Specific UTXO to request metadata for
     */
    utxo: string;
    /**
     * 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses
     */
    verbosity?: number;
}
export declare class TestnetGetTokenMetadataOfUtxoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An object containing the metadata of a token for a UTXO
     */
    getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
