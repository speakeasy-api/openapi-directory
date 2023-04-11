import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendUserEmailConfirmationSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class SendUserEmailConfirmationRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare enum SendUserEmailConfirmation202ApplicationJSONStatusEnum {
    AlreadyConfirmed = "already_confirmed"
}
/**
 * status is `already_confirmed` when user has already confirmed their email address.
 */
export declare class SendUserEmailConfirmation202ApplicationJSON extends SpeakeasyBase {
    status?: SendUserEmailConfirmation202ApplicationJSONStatusEnum;
}
export declare enum SendUserEmailConfirmation200ApplicationJSONStatusEnum {
    Success = "success"
}
/**
 * confirmation email has been sent
 */
export declare class SendUserEmailConfirmation200ApplicationJSON extends SpeakeasyBase {
    status?: SendUserEmailConfirmation200ApplicationJSONStatusEnum;
}
export declare class SendUserEmailConfirmationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * VendorNotFound - this is not a vendor user account
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * confirmation email has been sent
     */
    sendUserEmailConfirmation200ApplicationJSONObject?: SendUserEmailConfirmation200ApplicationJSON;
    /**
     * status is `already_confirmed` when user has already confirmed their email address.
     */
    sendUserEmailConfirmation202ApplicationJSONObject?: SendUserEmailConfirmation202ApplicationJSON;
}
