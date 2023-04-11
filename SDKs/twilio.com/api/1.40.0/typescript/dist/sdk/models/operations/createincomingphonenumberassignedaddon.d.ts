import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateIncomingPhoneNumberAssignedAddOnServerList: readonly ["https://api.twilio.com"];
export declare class CreateIncomingPhoneNumberAssignedAddOnSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
    /**
     * The SID that identifies the Add-on installation.
     */
    installedAddOnSid: string;
}
export declare class CreateIncomingPhoneNumberAssignedAddOnRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource.
     */
    accountSid: string;
    requestBody?: CreateIncomingPhoneNumberAssignedAddOnCreateIncomingPhoneNumberAssignedAddOnRequest;
    /**
     * The SID of the Phone Number to assign the Add-on.
     */
    resourceSid: string;
}
export declare class CreateIncomingPhoneNumberAssignedAddOnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn;
}
