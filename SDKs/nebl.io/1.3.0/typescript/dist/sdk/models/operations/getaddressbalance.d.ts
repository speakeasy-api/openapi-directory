import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAddressBalanceRequest extends SpeakeasyBase {
    /**
     * Address
     */
    address: string;
}
export declare class GetAddressBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Address balance
     */
    getAddressBalanceResponse?: number;
}
