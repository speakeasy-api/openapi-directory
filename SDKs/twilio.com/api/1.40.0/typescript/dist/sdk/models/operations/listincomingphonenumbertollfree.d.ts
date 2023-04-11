import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListIncomingPhoneNumberTollFreeServerList: readonly ["https://api.twilio.com"];
export declare class ListIncomingPhoneNumberTollFreeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListIncomingPhoneNumberTollFreeRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resources to read.
     */
    accountSid: string;
    /**
     * Whether to include phone numbers new to the Twilio platform. Can be: `true` or `false` and the default is `true`.
     */
    beta?: boolean;
    /**
     * A string that identifies the resources to read.
     */
    friendlyName?: string;
    /**
     * Whether to include phone numbers based on their origin. Can be: `twilio` or `hosted`. By default, phone numbers of all origin are included.
     */
    origin?: string;
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
     * The phone numbers of the IncomingPhoneNumber resources to read. You can specify partial numbers and use '*' as a wildcard for any digit.
     */
    phoneNumber?: string;
}
/**
 * OK
 */
export declare class ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    incomingPhoneNumbers?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListIncomingPhoneNumberTollFreeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listIncomingPhoneNumberTollFreeResponse?: ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
