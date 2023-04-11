import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteIncomingPhoneNumberAssignedAddOnServerList: readonly ["https://api.twilio.com"];
export declare class DeleteIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to delete.
     */
    accountSid: string;
    /**
     * The SID of the Phone Number to which the Add-on is assigned.
     */
    resourceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the resource to delete.
     */
    sid: string;
}
export declare class DeleteIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
