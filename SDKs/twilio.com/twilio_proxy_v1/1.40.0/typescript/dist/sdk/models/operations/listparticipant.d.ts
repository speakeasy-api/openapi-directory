import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListParticipantServerList: readonly ["https://proxy.twilio.com"];
export declare class ListParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListParticipantRequest extends SpeakeasyBase {
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
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resources to read.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resources to read.
     */
    sessionSid: string;
}
export declare class ListParticipantListParticipantResponseMeta extends SpeakeasyBase {
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
export declare class ListParticipantListParticipantResponse extends SpeakeasyBase {
    meta?: ListParticipantListParticipantResponseMeta;
    participants?: shared.ProxyV1ServiceSessionParticipant[];
}
export declare class ListParticipantResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listParticipantResponse?: ListParticipantListParticipantResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
