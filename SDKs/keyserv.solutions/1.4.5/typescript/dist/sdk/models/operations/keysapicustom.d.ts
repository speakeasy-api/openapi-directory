import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class KeysApiCustomRequest extends SpeakeasyBase {
    serial: string;
}
export declare class KeysApiCustomResponse extends SpeakeasyBase {
    contentType: string;
    keysApiCustom200ApplicationOctetStreamBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
