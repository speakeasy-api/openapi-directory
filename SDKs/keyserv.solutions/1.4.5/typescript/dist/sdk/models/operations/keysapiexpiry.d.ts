import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class KeysApiExpiryRequest extends SpeakeasyBase {
    serial: string;
}
export declare class KeysApiExpiryResponse extends SpeakeasyBase {
    contentType: string;
    keysApiExpiry200ApplicationJSONOneOf?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
