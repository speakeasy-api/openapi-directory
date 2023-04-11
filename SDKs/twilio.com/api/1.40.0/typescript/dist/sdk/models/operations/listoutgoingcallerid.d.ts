import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListOutgoingCallerIdServerList: readonly ["https://api.twilio.com"];
export declare class ListOutgoingCallerIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListOutgoingCallerIdRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resources to read.
     */
    accountSid: string;
    /**
     * The string that identifies the OutgoingCallerId resources to read.
     */
    friendlyName?: string;
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
     * The phone number of the OutgoingCallerId resources to read.
     */
    phoneNumber?: string;
}
/**
 * OK
 */
export declare class ListOutgoingCallerIdListOutgoingCallerIdResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    outgoingCallerIds?: shared.ApiV2010AccountOutgoingCallerId[];
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListOutgoingCallerIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listOutgoingCallerIdResponse?: ListOutgoingCallerIdListOutgoingCallerIdResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
