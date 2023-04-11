import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSecondaryAuthTokenServerList: readonly ["https://accounts.twilio.com"];
export declare class DeleteSecondaryAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
