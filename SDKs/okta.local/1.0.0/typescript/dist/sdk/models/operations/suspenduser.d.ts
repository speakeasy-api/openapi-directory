import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SuspendUserRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    userId: string;
}
export declare class SuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
