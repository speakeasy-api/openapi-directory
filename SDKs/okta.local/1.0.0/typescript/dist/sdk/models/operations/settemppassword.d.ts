import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetTempPasswordRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    tempPassword?: string;
    userId: string;
}
export declare class SetTempPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
