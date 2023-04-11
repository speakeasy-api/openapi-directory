import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnsuspendUserRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    userId: string;
}
export declare class UnsuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
