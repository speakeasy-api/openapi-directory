import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListPlayerStreamerServerList: readonly ["https://media.twilio.com"];
export declare class ListPlayerStreamerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListPlayerStreamerRequest extends SpeakeasyBase {
    /**
     * The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
     */
    order?: shared.PlayerStreamerEnumOrderEnum;
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
     * Status to filter by, with possible values `created`, `started`, `ended`, or `failed`.
     */
    status?: shared.PlayerStreamerEnumStatusEnum;
}
export declare class ListPlayerStreamerListPlayerStreamerResponseMeta extends SpeakeasyBase {
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
export declare class ListPlayerStreamerListPlayerStreamerResponse extends SpeakeasyBase {
    meta?: ListPlayerStreamerListPlayerStreamerResponseMeta;
    playerStreamers?: shared.MediaV1PlayerStreamer[];
}
export declare class ListPlayerStreamerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listPlayerStreamerResponse?: ListPlayerStreamerListPlayerStreamerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
