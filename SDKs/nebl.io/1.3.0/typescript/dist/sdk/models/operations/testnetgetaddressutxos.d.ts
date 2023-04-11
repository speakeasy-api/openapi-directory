import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetAddressUtxosRequest extends SpeakeasyBase {
    /**
     * Address
     */
    address: string;
}
export declare class TestnetGetAddressUtxosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UTXOs at an address
     */
    getAddressUtxosResponse?: shared.GetAddressUtxosResponse[];
}
