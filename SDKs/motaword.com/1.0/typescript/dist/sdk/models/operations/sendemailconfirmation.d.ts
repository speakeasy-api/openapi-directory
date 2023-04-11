import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum SendEmailConfirmation200ApplicationJSONStatusEnum {
    Success = "success",
    AlreadyConfirmed = "already_confirmed"
}
/**
 * When confirmation email is sent, status is `success`, or `already_confirmed` when user has already confirmed their email address.
 */
export declare class SendEmailConfirmation200ApplicationJSON extends SpeakeasyBase {
    status?: SendEmailConfirmation200ApplicationJSONStatusEnum;
}
export declare class SendEmailConfirmationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * When confirmation email is sent, status is `success`, or `already_confirmed` when user has already confirmed their email address.
     */
    sendEmailConfirmation200ApplicationJSONObject?: SendEmailConfirmation200ApplicationJSON;
}
