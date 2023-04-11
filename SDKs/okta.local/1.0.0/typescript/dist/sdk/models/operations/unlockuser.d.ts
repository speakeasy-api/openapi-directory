import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UnlockUserRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    userId: string;
}
export declare class UnlockUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
