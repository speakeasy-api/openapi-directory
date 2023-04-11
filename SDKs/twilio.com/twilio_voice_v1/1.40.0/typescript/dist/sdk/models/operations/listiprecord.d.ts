import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListIpRecordServerList: readonly ["https://voice.twilio.com"];
export declare class ListIpRecordSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListIpRecordRequest extends SpeakeasyBase {
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
export declare class ListIpRecordListIpRecordResponseMeta extends SpeakeasyBase {
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
export declare class ListIpRecordListIpRecordResponse extends SpeakeasyBase {
    ipRecords?: shared.VoiceV1IpRecord[];
    meta?: ListIpRecordListIpRecordResponseMeta;
}
export declare class ListIpRecordResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listIpRecordResponse?: ListIpRecordListIpRecordResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
