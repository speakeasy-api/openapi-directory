import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class KeysApiCurrentRequest extends SpeakeasyBase {
    serial: string;
}
export declare class KeysApiCurrentResponse extends SpeakeasyBase {
    contentType: string;
    keysApiCurrent200ApplicationJSONOneOf?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
