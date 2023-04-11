import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetAddressInfoRequest extends SpeakeasyBase {
    /**
     * Neblio Address to get information on.
     */
    address: string;
}
export declare class TestnetGetAddressInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An object with an array of UTXOs for this address
     */
    getAddressInfoResponse?: shared.GetAddressInfoResponse;
}
