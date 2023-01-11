import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendUserEmailConfirmationPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class SendUserEmailConfirmationSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare enum SendUserEmailConfirmation200ApplicationJsonStatusEnum {
    Success = "success"
}
export declare class SendUserEmailConfirmation200ApplicationJson extends SpeakeasyBase {
    status?: SendUserEmailConfirmation200ApplicationJsonStatusEnum;
}
export declare enum SendUserEmailConfirmation202ApplicationJsonStatusEnum {
    AlreadyConfirmed = "already_confirmed"
}
export declare class SendUserEmailConfirmation202ApplicationJson extends SpeakeasyBase {
    status?: SendUserEmailConfirmation202ApplicationJsonStatusEnum;
}
export declare class SendUserEmailConfirmationRequest extends SpeakeasyBase {
    pathParams: SendUserEmailConfirmationPathParams;
    security: SendUserEmailConfirmationSecurity;
}
export declare class SendUserEmailConfirmationResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    sendUserEmailConfirmation200ApplicationJSONObject?: SendUserEmailConfirmation200ApplicationJson;
    sendUserEmailConfirmation202ApplicationJSONObject?: SendUserEmailConfirmation202ApplicationJson;
}
