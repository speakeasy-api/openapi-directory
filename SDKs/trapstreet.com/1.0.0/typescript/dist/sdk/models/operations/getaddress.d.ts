import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAddressRequest extends SpeakeasyBase {
    address: string;
}
/**
 * OK
 */
export declare class GetAddress200ApplicationJSON extends SpeakeasyBase {
    description?: string;
    trap?: boolean;
}
export declare class GetAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getAddress200ApplicationJSONObject?: GetAddress200ApplicationJSON;
}
