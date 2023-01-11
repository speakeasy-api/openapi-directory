import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SendEmailConfirmation200ApplicationJsonStatusEnum {
    Success = "success",
    AlreadyConfirmed = "already_confirmed"
}
export declare class SendEmailConfirmation200ApplicationJson extends SpeakeasyBase {
    status?: SendEmailConfirmation200ApplicationJsonStatusEnum;
}
export declare class SendEmailConfirmationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sendEmailConfirmation200ApplicationJSONObject?: SendEmailConfirmation200ApplicationJson;
}
