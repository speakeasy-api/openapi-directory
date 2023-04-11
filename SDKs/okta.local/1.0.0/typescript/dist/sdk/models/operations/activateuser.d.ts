import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActivateUserRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    sendEmail?: string;
    userId: string;
}
export declare class ActivateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
