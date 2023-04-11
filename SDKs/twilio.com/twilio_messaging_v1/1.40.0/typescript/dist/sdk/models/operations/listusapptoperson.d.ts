import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUsAppToPersonServerList: readonly ["https://messaging.twilio.com"];
export declare class ListUsAppToPersonSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUsAppToPersonRequest extends SpeakeasyBase {
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) to fetch the resource from.
     */
    messagingServiceSid: string;
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
}
export declare class ListUsAppToPersonListUsAppToPersonResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListUsAppToPersonListUsAppToPersonResponse extends SpeakeasyBase {
    compliance?: shared.MessagingV1ServiceUsAppToPerson[];
    meta?: ListUsAppToPersonListUsAppToPersonResponseMeta;
}
export declare class ListUsAppToPersonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUsAppToPersonResponse?: ListUsAppToPersonListUsAppToPersonResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
