import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class KeysApiFindRequest extends SpeakeasyBase {
    serial: string;
}
export declare class KeysApiFindResponse extends SpeakeasyBase {
    contentType: string;
    keysApiFind200ApplicationJSONOneOf?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
