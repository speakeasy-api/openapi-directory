import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListIncomingPhoneNumberAssignedAddOnExtensionServerList: readonly ["https://api.twilio.com"];
export declare class ListIncomingPhoneNumberAssignedAddOnExtensionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListIncomingPhoneNumberAssignedAddOnExtensionRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to read.
     */
    accountSid: string;
    /**
     * The SID that uniquely identifies the assigned Add-on installation.
     */
    assignedAddOnSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The SID of the Phone Number to which the Add-on is assigned.
     */
    resourceSid: string;
}
/**
 * OK
 */
export declare class ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
    end?: number;
    extensions?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension[];
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListIncomingPhoneNumberAssignedAddOnExtensionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listIncomingPhoneNumberAssignedAddOnExtensionResponse?: ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
