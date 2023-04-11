import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMemberServerList: readonly ["https://api.twilio.com"];
export declare class ListMemberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMemberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Member resource(s) to read.
     */
    accountSid: string;
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
     * The SID of the Queue in which to find the members
     */
    queueSid: string;
}
/**
 * OK
 */
export declare class ListMemberListMemberResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    queueMembers?: shared.ApiV2010AccountQueueMember[];
    start?: number;
    uri?: string;
}
export declare class ListMemberResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMemberResponse?: ListMemberListMemberResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
