import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchIncomingPhoneNumberAssignedAddOnExtensionServerList: readonly ["https://api.twilio.com"];
export declare class FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchIncomingPhoneNumberAssignedAddOnExtensionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource to fetch.
     */
    accountSid: string;
    /**
     * The SID that uniquely identifies the assigned Add-on installation.
     */
    assignedAddOnSid: string;
    /**
     * The SID of the Phone Number to which the Add-on is assigned.
     */
    resourceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the resource to fetch.
     */
    sid: string;
}
export declare class FetchIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension;
}
