import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetFaucetRequest extends SpeakeasyBase {
    /**
     * Your Neblio Testnet Address
     */
    address: string;
    /**
     * Amount of NEBL to withdrawal in satoshis
     */
    amount?: number;
}
export declare class TestnetGetFaucetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object containing the transaction ID of the withdrawal.
     */
    getFaucetResponse?: shared.GetFaucetResponse;
}
