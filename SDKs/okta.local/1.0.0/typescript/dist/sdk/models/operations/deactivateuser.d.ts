import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeactivateUserRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    userId: string;
}
export declare class DeactivateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
