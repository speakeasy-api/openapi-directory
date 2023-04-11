import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestnetGetAddressUnconfirmedBalanceRequest extends SpeakeasyBase {
    /**
     * Address
     */
    address: string;
}
export declare class TestnetGetAddressUnconfirmedBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Address unconfirmed balance
     */
    getAddressUnconfirmedBalanceResponse?: number;
}
