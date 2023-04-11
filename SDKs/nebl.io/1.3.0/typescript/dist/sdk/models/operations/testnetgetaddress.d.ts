import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestnetGetAddressRequest extends SpeakeasyBase {
    /**
     * Address
     */
    address: string;
}
export declare class TestnetGetAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Object containing address info
     */
    getAddressResponse?: shared.GetAddressResponse;
}
