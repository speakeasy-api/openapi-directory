import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ResetPasswordRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    sendEmail?: string;
    userId: string;
}
export declare class ResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
